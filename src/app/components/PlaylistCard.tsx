

'use client';

export default function PlaylistCard() {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden text-center px-4 py-10">
        <h2 className="text-xl font-bold mb-2 text-gray-900">
          Playlist para programar 🎧
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Esta playlist es el soundtrack de mi código.
        </p>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://open.spotify.com/embed/playlist/00oUtAhFZAk1ATaXLmhm6h"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-12 rounded-3xl shadow-2xl max-w-4xl w-full mx-auto text-gray-900 text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-4">Playlist para programar 🎧</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Esta playlist es el soundtrack de mi código.
        </p>
        <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
          <iframe
            src="https://open.spotify.com/embed/playlist/00oUtAhFZAk1ATaXLmhm6h"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

