const songs = [
  'out/wdav_150819130117.mp3.1.mp3',
  'out/wdav_150819130117.mp3.2.mp3',
  'out/wdav_150819130117.mp3.3.mp3',
  'out/wdav_150819130117.mp3.4.mp3',
  'out/wdav_150819130117.mp3.5.mp3',
  'out/wdav_150819144117.mp3.1.mp3',
  'out/wdav_150819144117.mp3.2.mp3',
  'out/wdav_150819144117.mp3.3.mp3',
  'out/wdav_150819144117.mp3.4.mp3',
  'out/wdav_150819144117.mp3.5.mp3',
  'out/wdav_150819162117.mp3.1.mp3',
  'out/wdav_150819162117.mp3.2.mp3',
  'out/wdav_150819162117.mp3.3.mp3',
  'out/wdav_150819162117.mp3.4.mp3',
  'out/wdav_150819162117.mp3.5.mp3',
  'out/wdav_150819180117.mp3.1.mp3',
  'out/wdav_150819180117.mp3.2.mp3',
  'out/wdav_150819180117.mp3.3.mp3',
  'out/wdav_150819180117.mp3.4.mp3',
  'out/wdav_150819180117.mp3.5.mp3',
  'out/wdav_150819194117.mp3.1.mp3',
  'out/wdav_150819194117.mp3.2.mp3',
  'out/wdav_150819194117.mp3.3.mp3',
  'out/wdav_150819194117.mp3.4.mp3',
  'out/wdav_150819194117.mp3.5.mp3',
];

const player = document.getElementById('player');
const playlist = document.getElementById('playlist');

// 動態生成播放清單
songs.forEach(song => {
  const li = document.createElement('li');
  li.textContent = song.split('/').pop(); // 顯示檔案名稱
  li.addEventListener('click', () => {
    player.src = song;
    player.play();
  });
  playlist.appendChild(li);
});

// 自動播放下一首並支援重複播放
player.addEventListener('ended', () => {
  const currentSrc = player.src.split('/').pop();
  const currentIndex = songs.findIndex(song => song.split('/').pop() === currentSrc);
  const nextIndex = (currentIndex + 1) % songs.length; // 使用模運算實現循環
  player.src = songs[nextIndex];
  player.play();
});

/* //隨機重複播放
player.addEventListener('ended', () => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  player.src = songs[randomIndex];
  player.play();
});
*/

// 初始播放第一首歌曲（可選）
player.src = songs[0];
player.play();
