import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';
import 'package:google_fonts/google_fonts.dart';

void main() => runApp(SpotifyPodcastApp());

class SpotifyPodcastApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: const Color(0xFF121212),
        primaryColor: const Color(0xFF1DB954),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1DB954),
          brightness: Brightness.dark,
        ),
      ),
      home: PodcastPlayerScreen(),
    );
  }
}

class PodcastPlayerScreen extends StatefulWidget {
  @override
  _PodcastPlayerScreenState createState() => _PodcastPlayerScreenState();
}

class _PodcastPlayerScreenState extends State<PodcastPlayerScreen> {
  final AudioPlayer _audioPlayer = AudioPlayer();
  List<String> _playlist = [];
  int _currentIndex = 0;
  bool isPlaying = false;
  Duration duration = Duration.zero;
  Duration position = Duration.zero;

  @override
  void initState() {
    super.initState();
    _loadAudioAssets();

    _audioPlayer.onPlayerStateChanged.listen((state) {
      if (mounted) setState(() => isPlaying = state == PlayerState.playing);
    });
    _audioPlayer.onDurationChanged.listen((d) {
      if (mounted) setState(() => duration = d);
    });
    _audioPlayer.onPositionChanged.listen((p) {
      if (mounted) setState(() => position = p);
    });
    _audioPlayer.onPlayerComplete.listen((event) => _nextTrack());
  }

  Future<void> _loadAudioAssets() async {
    final manifestContent = await DefaultAssetBundle.of(
      context,
    ).loadString('AssetManifest.json');
    final Map<String, dynamic> manifestMap = json.decode(manifestContent);

    final audioFiles = manifestMap.keys
        .where(
          (String key) =>
              key.startsWith('assets/audio/') && key.endsWith('.mp3'),
        )
        .toList();

    // Sortowanie, aby pliki były w kolejności (np. 01, 02...)
    audioFiles.sort();

    setState(() {
      _playlist = audioFiles;
    });
  }

  // Funkcja odtwarzająca wybrany indeks
  Future<void> _selectAndPlay(int index) async {
    setState(() {
      _currentIndex = index;
    });
    await _playNewTrack();
  }

  Future<void> _playPause() async {
    if (_playlist.isEmpty) return;
    if (isPlaying) {
      await _audioPlayer.pause();
    } else {
      String path = _playlist[_currentIndex].replaceFirst('assets/', '');
      await _audioPlayer.play(AssetSource(path));
    }
  }

  void _nextTrack() {
    if (_playlist.isEmpty) return;
    _selectAndPlay((_currentIndex + 1) % _playlist.length);
  }

  void _prevTrack() {
    if (_playlist.isEmpty) return;
    _selectAndPlay((_currentIndex - 1 + _playlist.length) % _playlist.length);
  }

  Future<void> _playNewTrack() async {
    if (_playlist.isEmpty) return;
    String path = _playlist[_currentIndex].replaceFirst('assets/', '');
    await _audioPlayer.stop();
    await _audioPlayer.play(AssetSource(path));
  }

  String _getCleanTitle(String path) {
    return path.split('/').last.replaceAll('%20', ' ').replaceAll('.mp3', '');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF121212),
        elevation: 0,
        title: Text(
          "MOJA BIBLIOTEKA FIZYKI",
          style: GoogleFonts.montserrat(
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: Column(
        children: [
          // SEKCJA 1: LISTA PLIKÓW
          Expanded(
            child: _playlist.isEmpty
                ? const Center(child: CircularProgressIndicator())
                : ListView.builder(
                    itemCount: _playlist.length,
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    itemBuilder: (context, index) {
                      bool isSelected = _currentIndex == index;
                      return ListTile(
                        leading: Icon(
                          isSelected
                              ? Icons.play_circle_fill
                              : Icons.music_note,
                          color: isSelected
                              ? const Color(0xFF1DB954)
                              : Colors.grey,
                        ),
                        title: Text(
                          _getCleanTitle(_playlist[index]),
                          style: GoogleFonts.montserrat(
                            fontSize: 14,
                            color: isSelected
                                ? const Color(0xFF1DB954)
                                : Colors.white,
                            fontWeight: isSelected
                                ? FontWeight.bold
                                : FontWeight.normal,
                          ),
                        ),
                        subtitle: Text(
                          "Odcinek ${index + 1}",
                          style: const TextStyle(fontSize: 12),
                        ),
                        onTap: () => _selectAndPlay(index),
                      );
                    },
                  ),
          ),

          // SEKCJA 2: PANEL ODTWARZACZA (NA DOLE)
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: const Color(0xFF181818),
              border: Border(top: BorderSide(color: Colors.white10, width: 1)),
            ),
            child: Column(
              children: [
                // Tytuł obecnie granego
                Text(
                  _playlist.isNotEmpty
                      ? _getCleanTitle(_playlist[_currentIndex])
                      : "Wybierz utwór",
                  textAlign: TextAlign.center,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: GoogleFonts.montserrat(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 10),

                // Slider
                SliderTheme(
                  data: SliderTheme.of(context).copyWith(
                    trackHeight: 2,
                    thumbShape: const RoundSliderThumbShape(
                      enabledThumbRadius: 4,
                    ),
                    activeTrackColor: const Color(0xFF1DB954),
                  ),
                  child: Slider(
                    min: 0,
                    max: duration.inSeconds.toDouble(),
                    value: position.inSeconds.toDouble().clamp(
                      0,
                      duration.inSeconds.toDouble(),
                    ),
                    onChanged: (value) =>
                        _audioPlayer.seek(Duration(seconds: value.toInt())),
                  ),
                ),

                // Przyciski sterowania
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    IconButton(
                      icon: const Icon(Icons.skip_previous),
                      onPressed: _prevTrack,
                    ),
                    GestureDetector(
                      onTap: _playPause,
                      child: CircleAvatar(
                        radius: 25,
                        backgroundColor: Colors.white,
                        child: Icon(
                          isPlaying ? Icons.pause : Icons.play_arrow,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    IconButton(
                      icon: const Icon(Icons.skip_next),
                      onPressed: _nextTrack,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
