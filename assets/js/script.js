const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const list_song_playList = $('.list')
const list_album = $('.list_album')
const list_mv = $('.list_mv')
const list_song = $('.list_song')
const btnPlay = $('.btn_control_play')
const audio = $('audio')
const avatar_song = $('.avatar_song')
const middel_footer = $('.middel_footer')
const progress = $('.progress')
const btn_next = $('.btn__next')
const btn_prev = $('.btn__prev')
const btn_random = $('.btn__random')
const btn_repeat = $('.btn__repeat')
const start_song =$('.start_song')
const end_song = $('.end_song')
const MUSIC_KEY = 'ZING_MP3'
const volumes = $('#volume')
const lits_menu = $('.list_menu')
const tab_song__list_menu = $('.tab_song--list_menu')
const tab_playlist__list_menu = $('.tab_playlist--list_menu')
const tab_album__list_menu = $('.tab_album--list_menu')
const tab_mv__list_menu = $('.tab_mv--list_menu')
const tab_singer__list_menu = $('.tab_singer--list_menu')
const menu_one = $$('.menu__item_one')
const menu_two = $('.menu_two')
const playlist_container_music = $('.all_song_playlist')
const btn_down_container = $('.btn-down')
const icon_list_check = $('.fa-list-check')
const tab_song_container = $('.container_music_player')
const zing_chart = $('.list_music_trend')
const discover_song_chart = $('.discover_song_chart')
const discover = $('.discover')
const zingChart = $('.zing_chart')
const radio = $('.radio')
const content = $('.content')
const notification = $('.pop_up_notification')
const footer_mobile = $('.footer_mobile')
const btn_play_mobile = $('.play_mb')
const btn_prev_mobile = $('.prev_mb')
const btn_next_mobile = $('.next_mb')
const circle_img_mobile = $('.circle_img_mobile')
const playList = {
    songs: [
        {
            image: '../ZingMP3/image/playlist/songvang.jpg',
            title: 'Sóng Vàng 2023',
            produce: 'Zing Mp3'
        }, 
        {
            image: '../ZingMP3/image/playlist/ngayemdilaychong.jpg',
            title: 'Ngày mai em đi lấy chồng',
            produce: 'Thành Đạt'
        }, 
        {
            image: '../ZingMP3/image/playlist/tuyentap.jpg',
            title: 'Nhạc tuyển tập hay 2023',
            produce: 'Vpop'
        }, 
        {
            image: '../ZingMP3/image/playlist/RapViet2020.jpeg',
            title: 'Rap Việt',
            produce: 'Vion chanel'
        }
    ]
}

const playlist_one = {
    songs: [
        {
            image: '../ZingMP3/image/playlist/songvang.jpg',
            title: 'Sóng Vàng 2023',
            produce: 'Zing Mp3'
        }, 
        {
            image: '../ZingMP3/image/playlist/ngayemdilaychong.jpg',
            title: 'Ngày mai em đi lấy chồng',
            produce: 'Thành Đạt'
        }, 
        {
            image: '../ZingMP3/image/playlist/tuyentap.jpg',
            title: 'Nhạc tuyển tập hay 2023',
            produce: 'Vpop'
        }, 
        {
            image: '../ZingMP3/image/playlist/RapViet2020.jpeg',
            title: 'Rap Việt',
            produce: 'Vion chanel'
        },
        {
            image: '../ZingMP3/image/playlist/hoailam.jpg',
            title: 'Top ca khúc hay',
            produce: 'Hoài Lâm'
        },
        {
            image: '../ZingMP3/image/playlist/lebaobinh.jpg',
            title: 'Tuyển tập bài hát',
            produce: 'Lê Bảo Bình'
        },
        {
            image: '../ZingMP3/image/playlist/lofi_chill.jpg',
            title: 'Nhạc Lofi Chill',
            produce: 'Lofi'
        },
        {
            image: '../ZingMP3/image/playlist/mrsiro.jpg',
            title: 'Nhạc Mrsiro',
            produce: 'Mrsiro'
        }

    ]
}

const album = {
    songs: [
        {
            image: '../ZingMP3/image/album/nhactre.jpg',
            title: 'Nhạc trẻ'
        },
        {
            image: '../ZingMP3/image/album/bolero.jpg',
            title: 'Nhạc trữ tình'
        }, 
        {
            image: '../ZingMP3/image/album/us_uk.jpg',
            title: 'Nhạc US-UK'
        }, 
        {
            image: '../ZingMP3/image/album/balads.jpg',
            title: 'Nhạc balad buồn'
        }, 
        {
            image: '../ZingMP3/image/album/us_uk_thinh_hanh.jpg',
            title: 'Top thịnh hành US-UK'
        }
    ]
}

const album_one = {
    songs: [
        {
            image: '../ZingMP3/image/album/nhactre.jpg',
            title: 'Nhạc trẻ'
        },
        {
            image: '../ZingMP3/image/album/bolero.jpg',
            title: 'Nhạc trữ tình'
        }, 
        {
            image: '../ZingMP3/image/album/us_uk.jpg',
            title: 'Nhạc US-UK'
        }, 
        {
            image: '../ZingMP3/image/album/balads.jpg',
            title: 'Nhạc balad buồn'
        }, 
        {
            image: '../ZingMP3/image/album/us_uk_thinh_hanh.jpg',
            title: 'Top thịnh hành US-UK'
        }
        
    ]
}

const mvs = {
    songs: [
        {
            image:'../ZingMP3/image/mv/maunuocmat.jpg', 
            title: 'Màu nước mắt',
            produce: 'Nguyễn Trần Trung Quân',
            avatar: '../ZingMP3/image/mv/maunuocmat.jpg'
        }, 
        {
            image:'../ZingMP3/image/mv/hoacolau.jpg', 
            title: 'Hoa cỏ lau',
            produce: 'Phong Max',
            avatar: '../ZingMP3/image/mv/hoacolau.jpg'
        },
        {
            image:'../ZingMP3/image/mv/tinhtahainga.jpg', 
            title: 'Tình ta hai ngã',
            produce: 'Aki Khoa',
            avatar: '../ZingMP3/image/mv/tinhtahainga.jpg'
        }
    ]
}

const mv_one = {
    songs: [
        {
            image:'../ZingMP3/image/mv/maunuocmat.jpg', 
            title: 'Màu nước mắt',
            produce: 'Nguyễn Trần Trung Quân',
            avatar: '../ZingMP3/image/mv/maunuocmat.jpg'
        }, 
        {
            image:'../ZingMP3/image/mv/hoacolau.jpg', 
            title: 'Hoa cỏ lau',
            produce: 'Phong Max',
            avatar: '../ZingMP3/image/mv/hoacolau.jpg'
        },
        {
            image:'../ZingMP3/image/mv/tinhtahainga.jpg', 
            title: 'Tình ta hai ngã',
            produce: 'Aki Khoa',
            avatar: '../ZingMP3/image/mv/tinhtahainga.jpg'
        }
    ]
}

const list_singer = {
    singers: [
        {
            image: '../ZingMp3/image/singer/hoailam_1.jpg',
            name: 'Hoài Lâm'
        }, 
        {
            image: '../ZingMp3/image/singer/mytam.jpeg',
            name: 'Mỹ Tâm'
        }, 
        {
            image: '../ZingMp3/image/singer/sontung.jpg',
            name: 'Sơn Tùng'
        }, 
        {
            image: '../ZingMp3/image/singer/tuanhung.jpg',
            name: 'Tuấn Hưng'
        }, 
        {
            image: '../ZingMp3/image/singer/ducphuc.jpg',
            name: 'Đức Phúc'
        },
        {
            image: '../ZingMp3/image/singer/chali_puth.jpg',
            name: 'Charlie Puth'
        },
        {
            image: '../ZingMp3/image/singer/h2k.jpg',
            name: 'H2K'
        },
        {
            image: '../ZingMp3/image/singer/karik.jpg',
            name: 'Karik'
        }
        
    ]
}

const my_music = {
    songs: [
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "./music/y2meta.com - Vicetone - Nevada (ft. Cozi Zuehlsdorff) (128 kbps).mp3",
            image:
              "../ZingMP3/image/song/nevada.jpg",
              duration: '03:29'
          },
          {
            name: "Attention",
            singer: "Charlie Puth",
            path: "./music/y2meta.com - Charlie Puth - Attention (Lyrics) (128 kbps).mp3",
            image:
              "../ZingMP3/image/song/attention.jpg",
              duration: '03:32'
          },
          {
            name: "Summertime",
            singer: "K-391",
            path: "./music/y2meta.com - K-391 - Summertime [Sunshine] (128 kbps).mp3",
            image:
              "../ZingMP3/image/song/summertime.jpg",
              duration: "04:12"
          },
          {
            name: "Ngày Khác Lạ ft. Giang Pham, Triple D",
            singer: "Đen",
            path: "./music/y2meta.com - Đen - Ngày Khác Lạ ft. Giang Pham, Triple D (M_V) (128 kbps).mp3",
            image:
              "../ZingMP3/image/song/ngaykhacla.jpg",
            duration: "03:33"
          },
          {
            name: "Lemon Tree",
            singer: "DJ DESA Remix (Lyrics + Vietsub)",
            path: "./music/y2meta.com - Lemon Tree - DJ DESA Remix (Lyrics + Vietsub) __ TikTok ♫ (128 kbps).mp3",
            image:
              "../ZingMP3/image/song/lemon_tree.jpg",
            duration: "03:05"
          },
          {
            name: "Tình ta hai ngã",
            singer: "Aki Khoa",
            path: "./music/y2mate.com - TÌNH TA HAI NGÃ  AKI KHOA  PHAN TRẦN CÔNG HIẾU  OFFICIAL MUSIC VIDEO.mp3",
            image:
              "../ZingMP3/image/mv/tinhtahainga.jpg",
            duration: "07:16"
          }
    ]
}


const slideItems = $$('.option_all_song_slide_img')


function formatTime(time) {
    var minutes = Math.floor(time / 60).toFixed(0)
    var milisecond = Math.floor(time % 60).toFixed(0)
    return `${minutes < 10 ? "0" + minutes : minutes}:${milisecond < 10 ? "0" + milisecond : milisecond}`
}

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(MUSIC_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(MUSIC_KEY, JSON.stringify(this.config))
    },
    render: function (){
        // render playlist
        var html = playList.songs.map((song) => {
            return `
                <div class="list_item">
                    <div class="overlay_img">
                        <img src="${song.image}" alt="">
                    </div>
                    <p class="title">${song.title}</p>
                    <p class="produce">${song.produce}</p>
                </div>
            `
        })
        list_song_playList.innerHTML += html.join('')

        // render ablum
        var html_album = album.songs.map((song)=> {
            return `
                <div class="list_album_item">
                    <div class="overlay_img">
                        <img src="${song.image}" alt="">
                    </div>
                    <p class="title">${song.title}</p>
                </div>
            `
        })
        list_album.innerHTML += html_album.join('')

        // render mv
        var html_mv = mvs.songs.map((mv) => {
            return `
                <div class="list_mv_item">
                    <img src="${mv.image}" alt="">
                    <div class="description_mv">
                          <img src="${mv.avatar}" alt="">
                          <div class="info">
                            <p class="title">${mv.title}</p>
                            <p class="produce">${mv.produce}</p>
                          </div>
                    </div>
                </div>
            `
        })
        list_mv.innerHTML += html_mv.join('')

        // render list bài hát
        var html_song = my_music.songs.map((song, index) => {
            return `
                <div class="song__item" data-index="${index}">
                    <div class="left__item">
                        <img src="${song.image}" alt="" style="width: 50px; height: 50px;border-radius: 10px;">
                        <div class="description_song">
                            <p class="song_name">${song.name}</p>
                            <p class="song_author">${song.singer}</p>
                        </div>
                    </div>

                    <div class="right__item">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-microphone"></i>
                        <span class="time_song" id="${index}">${song.duration}</span>
                    </div>
                </div>
            `
        })

        list_song.innerHTML += html_song.join('')

        // render theo các tab trên thanh menu
        // 1. render tab bài hát
        var html_tab_song = my_music.songs.map((song, index) => {
            return `
                <div class="tab_song--list_menu_item" data-index="${index}">
                    <div class="left__item">
                        <img src="${song.image}" alt="" style="width: 50px; height: 50px;border-radius: 10px;">
                        <div class="description_song">
                            <p class="song_name">${song.name}</p>
                            <p class="song_author">${song.singer}</p>
                        </div>
                    </div>

                    <div class="right__item">
                        <i class="fa-solid fa-heart" style="color: red"></i>
                        <i class="fa-solid fa-microphone"></i>
                        <span class="time_song" id="${index}">${song.duration}</span>
                    </div>
                </div>
            `
        }) 

        tab_song__list_menu.innerHTML += html_tab_song.join('')

        // 2. render tab_playlist
        var html_tab_playlist = playlist_one.songs.map((song)=> {
            return `
                <div class="tab_playlist--list_menu_item">
                    <img src="${song.image}" alt="">
                    <p class="title">${song.title}</p>
                    <p class="produce">${song.produce}</p>
                    <div class="overlay">
                        <i class="fa-solid fa-heart-circle-plus"></i>
                        <i class="fa-regular fa-circle-play"></i>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            `
        })

        tab_playlist__list_menu.innerHTML += html_tab_playlist.join("")

        // 3. render tab_album
        var html_tab_album = album_one.songs.map((song)=> {
            return `
                <div class="tab_ablum--list_album_item">
                    <img src="${song.image}" alt="">
                    <p class="title">${song.title}</p>
                </div>
            `
        })
        
        tab_album__list_menu.innerHTML += html_tab_album.join('')
        
        // 4. render MV
        var html_tab_mv = mv_one.songs.map((mv)=> {
            return `
                <div class="tab_mv--list_mv_item">
                    <img src="${mv.image}" alt="">
                    <div class="description_mv">
                        <img src="${mv.avatar}" alt="">
                        <div class="info">
                            <p class="title">${mv.title}</p>
                            <p class="produce">${mv.produce}</p>
                        </div>
                    </div>
                </div>
            `
        })
        
        tab_mv__list_menu.innerHTML += html_tab_mv.join('')

        // 5. render nghệ sĩ
        var html_tab_singer = list_singer.singers.map((singer)=> {
            return `
                 <div class="tab_singer_item">
                        <div class="singer_picture">
                            <img src="${singer.image}">
                            <i class="fa-solid fa-heart like"></i>
                        </div>
                        <p>${singer.name}</p>
                        <button class="btn_liked">Yêu thích</button>
                </div>
            `
        })

        tab_singer__list_menu.innerHTML += html_tab_singer.join('')

        // render bài hát vào tab_song_container
        var html_container_music = my_music.songs.map((song, index)=> {
            return `
                <div class="song__item" data-index="${index}">
                    <div class="left__item">
                        <img src="${song.image}" alt="" style="width: 50px; height: 50px;border-radius: 10px;">
                        <div class="description_song">
                            <p class="song_name">${song.name}</p>
                            <p class="song_author">${song.singer}</p>
                        </div>
                    </div>

                    <div class="right__item">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-microphone"></i>
                        <span class="time_song" id="${index}">${song.duration}</span>
                    </div>
                </div>
            `
        })

        playlist_container_music.innerHTML += html_container_music.join('')

        // render tab_zing_chart
        var html_zing_chart = my_music.songs.map((song, index)=> {
            return `
                <div class="zing_chart_song__item" data-index="${index}">
                    <div class="left__item">
                        <div class="rank">
                             <p class="top_rank top_rank_${index}">${index + 1}</p>
                             <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <img src="${song.image}" alt="" style="width: 50px; height: 50px;border-radius: 10px;">
                        <div class="description_song">
                            <p class="song_name">${song.name}</p>
                            <p class="song_author">${song.singer}</p>
                        </div>
                    </div>

                    <div class="right__item">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-microphone"></i>
                        <span class="time_song" id="${index}">${song.duration}</span>
                    </div>
                    <div class="overlay_zing_chart">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            `
        })
        zing_chart.innerHTML += html_zing_chart.join('')

        // render bảng xếp hạng bên tab khám phá
        var htm_discover_chart = my_music.songs.map((song, index)=> {
            return `
                <div class="discover_song_chart_item zing_chart_song__item" data-index="${index}">
                    <div class="left__item">
                        <div class="rank">
                            <p class="top_rank top_rank_${index}">${index + 1}</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <img src="${song.image}" alt="" style="width: 50px; height: 50px;border-radius: 10px;">
                        <div class="description_song">
                            <p class="song_name">${song.name}</p>
                            <p class="song_author">${song.singer}</p>
                        </div>
                    </div>

                    <div class="right__item">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-microphone"></i>
                        <span class="time_song" id="${index}">${song.duration}</span>
                    </div>
                    <div class="overlay_discover_chart">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            `
        })

        discover_song_chart.innerHTML += htm_discover_chart.join('')
    },
    handelEvent: function() {
        const _this = this
       
        // xử lý xoay cd
        const cdAnimate = avatar_song.animate([{
            transform: 'rotate(360deg)'
        }], {
            duration: 10000,
            iterations: Infinity
        })
        cdAnimate.pause()

        // xử lý cd xoay trên mobile
        const cdAnimate_mobile = circle_img_mobile.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdAnimate_mobile.pause()

        // click phát nhạc
        btnPlay.onclick = function(){
            if(_this.isPlaying) {
                audio.pause()
            }else {
                audio.play()
            }
            
        }

        // on mobile
        btn_play_mobile.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            }else {
                audio.play()
            }
        }

        btn_next_mobile.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else if(_this.isRepeat) {
                audio.play()
            }else {
                _this.next_Song()
            }
            audio.play()
        }

        btn_prev_mobile.onclick = function() {
             if(_this.isRandom) {
                _this.playRandomSong()
            }else if(_this.isRepeat) {
                audio.play()
            }else {
                _this.prev_Song()
            }
            audio.play()
        }

        //xử lý trạng thái bật, tắt nhạc
        audio.onplay = function() {
            _this.isPlaying = true
            middel_footer.classList.add('playing')
            btn_play_mobile.classList.add('playing_mobile')
            cdAnimate.play()
            cdAnimate_mobile.play()
        }

        audio.onpause = function() {
            _this.isPlaying = false
            middel_footer.classList.remove('playing')
            btn_play_mobile.classList.remove('playing_mobile')
            cdAnimate.pause()
            cdAnimate_mobile.pause()
        }

        // xử lý bật / tắt random
        btn_random.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            btn_random.classList.toggle('active', _this.isRandom)
        }

        // xử lý bật / tắt repeat
        btn_repeat.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            btn_repeat.classList.toggle('active', _this.isRepeat)
        }

        // xử lý thanh theo dõi tiến độ bài hát
        progress.onchange = function(e) {
            var timeChange = (audio.duration / 100) * e.target.value
            audio.currentTime = timeChange
            
        }

        audio.ontimeupdate = function() {
             if(audio.duration) {
                var timePercent = (audio.currentTime / audio.duration) * 100
                progress.value = timePercent
                _this.displayRemainTime()
             }   
        }
        
        // xử lý chuyển bài hát
        btn_next.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else if(_this.isRepeat) {
                audio.play()
            }else {
                _this.next_Song()
            }
            audio.play()
        }

        btn_prev.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else if(_this.isRepeat) {
                audio.play()
            }else {
                _this.prev_Song()
            }
            audio.play()
        }

        // xử lý bài hát khi kết thúc
        audio.onended = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else if(_this.isRepeat) {
                audio.play()
            }else {
                _this.next_Song()
            }
            audio.play()
        }

        // xử lý thay đổi thanh volume
        volumes.onchange = function(e) {
            audio.volume = e.target.value
        }

        // xử lý click vào danh sách bài hát
        list_song.onclick = function(e) {
            const songNode = e.target.closest('.song__item')
            const control_music_mobile = $('.control_play_music_mobile')
            if(songNode) {
                control_music_mobile.style.display = 'flex'
                _this.currentIndex = songNode.dataset.index
                _this.loadCurrentSong()
                audio.play()
            }
        }
        

        // xử lý chuyển tab
        const song = $('.song')
        const mv = $('.mv')
        const albums = $('.album')
        const playLists = $('.playlist')
        const tab_song = $('.tab_song')
        const tab_playlist = $('.tab_playlist')
        const tab_album = $('.tab_album')
        const tab_mv = $('.tab_mv')
        const tab_singer= $('.tab_singer')
        lits_menu.onclick = function(e) {
            const nodeItem = e.target.closest('.list_menu_item')
            const nodeItem_Active = $('.active_item_slide')
           
            
            if(nodeItem) { 
                // content.style.display = 'none'
                zingChart.style.display = 'none'
                radio.style.display = 'none'
                discover.style.display = 'none'
                nodeItem_Active.classList.remove('active_item_slide')
                nodeItem.classList.add('active_item_slide')
                switch(nodeItem.dataset.index){
                    case "0": {
                        tab_song.style.display= 'none'
                        song.style.display='block'
                        mv.style.display='block'
                        albums.style.display='block'
                        playLists.style.display='block'
                        tab_playlist.style.display='none'
                        tab_album.style.display='none'
                        tab_mv.style.display='none'
                        tab_singer.style.display='none'
                        break;
                    }
                    case "1": {
                        tab_song.style.display= 'block'
                        song.style.display='none'
                        mv.style.display='none'
                        albums.style.display='none'
                        playLists.style.display='none'
                        tab_playlist.style.display='none'
                        tab_album.style.display='none'
                        tab_mv.style.display='none'
                        tab_singer.style.display='none'
                        break;
                    }
                    case "2": {
                        tab_song.style.display= 'none'
                        song.style.display='none'
                        mv.style.display='none'
                        albums.style.display='none'
                        playLists.style.display='none'
                        tab_playlist.style.display='block'
                        tab_album.style.display='none'
                        tab_mv.style.display='none'
                        tab_singer.style.display='none'
                        break;
                    }
                    case "3": {
                        tab_song.style.display= 'none'
                        song.style.display='none'
                        mv.style.display='none'
                        albums.style.display='none'
                        playLists.style.display='none'
                        tab_playlist.style.display='none'
                        tab_album.style.display='block'
                        tab_mv.style.display='none'
                        tab_singer.style.display='none'
                        break;
                    }
                    case "4": {
                        tab_song.style.display= 'none'
                        song.style.display='none'
                        mv.style.display='none'
                        albums.style.display='none'
                        playLists.style.display='none'
                        tab_playlist.style.display='none'
                        tab_album.style.display='none'
                        tab_mv.style.display='none'
                        tab_singer.style.display='none'
                       tab_mv.style.display = 'block'
                       break;
                    }
                    case "5": { 
                        tab_song.style.display= 'none'
                        song.style.display='none'
                        mv.style.display='none'
                        albums.style.display='none'
                        playLists.style.display='none'
                        tab_playlist.style.display='none'
                        tab_album.style.display='none'
                        tab_mv.style.display='none'
                        tab_singer.style.display='block'
                        break;
                    }
                    case "6": {
                        notification.style.display = 'block'
                        setTimeout(function(){
                            notification.style.display = 'none'
                        }, 3000)
                        break;
                    }
                }
            }
        }
        
        // xử lý khi click vào nút yêu thích tab_singer
        tab_singer__list_menu.onclick = function(e) {
            const singer_item = e.target.closest('.tab_singer_item')
            if(singer_item) {
                const btn_like = singer_item.querySelector('.like')
                btn_like.classList.toggle('active_btn')          
            }            
        }

        // xử lý khi click vào bài hát trên tab_song
        tab_song__list_menu.onclick = function(e) {
            const tab_song_node = e.target.closest('.tab_song--list_menu_item')
            if(tab_song_node) {
                _this.currentIndex = tab_song_node.dataset.index
                _this.loadCurrentSong()
                audio.play()
            }
        }

        // xử lý chuyển tab side_bar
        const line_one = $('.line_one')
        line_one.style.top = menu_one[0].offsetTop + 'px'
        line_one.style.height = menu_one[0].offsetHeight + 'px'
       menu_one.forEach((item) => {
            item.onclick = function() {
                tab_song.style.display= 'none'
                song.style.display='none'
                mv.style.display='none'
                albums.style.display='none'
                playLists.style.display='none'
                tab_playlist.style.display='none'
                tab_album.style.display='none'
                tab_mv.style.display='none'
                tab_singer.style.display='none'
                const line_one = $('.line_one')
                line_one.style.top = item.offsetTop + 'px'
                line_one.style.height = item.offsetHeight + 'px'
                let index = item.dataset.index
                switch(index) {
                    case '0': {
                        content.style.display = 'block'
                        song.style.display='block'
                        mv.style.display='block'
                        albums.style.display='block'
                        playLists.style.display='block'
                        zingChart.style.display = 'none'
                        radio.style.display = 'none'
                        discover.style.display = 'none'
                        break;
                    }
                    case '1': {
                        content.style.display = 'none'
                        zingChart.style.display = 'none'
                        radio.style.display = 'none'
                        discover.style.display = 'block'
                        break;
                    }
                    case '2': {
                        content.style.display = 'none'
                        zingChart.style.display = 'block'
                        radio.style.display = 'none'
                        discover.style.display = 'none'
                        break;
                    }
                    case '3': {
                        content.style.display = 'none'
                        zingChart.style.display = 'none'
                        radio.style.display = 'block'
                        discover.style.display = 'none'
                        break;
                    }
                    case '4': {
                        notification.style.display = 'block'
                        setTimeout(function(){
                            notification.style.display = 'none'
                        }, 5000)
                        break;
                    }
                }
            }
       });

       footer_mobile.onclick = function(e) {
           const mobie_node = e.target.closest('.mobile_item')
           if(mobie_node) {
               let index = mobie_node.dataset.index
               switch(index) {
                case '0': {
                    content.style.display = 'block'
                    zingChart.style.display = 'none'
                    radio.style.display = 'none'
                    discover.style.display = 'none'
                    break;
                }
                case '1': {
                    content.style.display = 'none'
                    zingChart.style.display = 'none'
                    radio.style.display = 'none'
                    discover.style.display = 'block'
                    break;
                }
                case '2': {
                    content.style.display = 'none'
                    zingChart.style.display = 'block'
                    radio.style.display = 'none'
                    discover.style.display = 'none'
                    break;
                }
                case '3': {
                    content.style.display = 'none'
                    zingChart.style.display = 'none'
                    radio.style.display = 'block'
                    discover.style.display = 'none'
                    break;
                }
                case '4': {
                    notification.style.display = 'block'
                    setTimeout(function(){
                        notification.style.display = 'none'
                    }, 5000)
                    break;
                }
               }
           }
       }
       
       menu_two.onclick = function(e) {
          const node = e.target.closest('.menu__item')
          if(node) {
              notification.style.display = 'block'
          }
          setTimeout(function(){
              notification.style.display = 'none'
          }, 2000)
       }
       

       // xử lý chuyển slide ảnh trang cá nhân
       var slideIndex = 0
       const slideLength = my_music.songs.length
       setInterval(function(){
           slideItems[slideIndex].classList.replace('option_all_song_slide_img_first', 'option_all_song_slide_img_four')
           slideIndex++
           if(slideIndex === slideLength - 2) {
               slideItems[slideIndex].classList.replace('option_all_song_slide_img_second', 'option_all_song_slide_img_first')
               slideItems[slideIndex + 1].classList.replace('option_all_song_slide_img_third',  'option_all_song_slide_img_second')
               slideItems[0].classList.replace('option_all_song_slide_img_four', 'option_all_song_slide_img_third')
           }else if(slideIndex === slideLength - 1) {
               slideItems[slideIndex].classList.replace('option_all_song_slide_img_second', 'option_all_song_slide_img_first')
               slideItems[0].classList.replace('option_all_song_slide_img_third', 'option_all_song_slide_img_second')
               slideItems[1].classList.replace('option_all_song_slide_img_four', 'option_all_song_slide_img_third')
           }else if(slideIndex === slideLength) {
               slideItems[0].classList.replace('option_all_song_slide_img_second', 'option_all_song_slide_img_first')
               slideItems[1].classList.replace('option_all_song_slide_img_third', 'option_all_song_slide_img_second')
               slideItems[2].classList.replace('option_all_song_slide_img_four', 'option_all_song_slide_img_third')
               slideIndex = 0
           }else {
            slideItems[slideIndex].classList.replace('option_all_song_slide_img_second', 'option_all_song_slide_img_first')
            slideItems[slideIndex + 1].classList.replace('option_all_song_slide_img_third', 'option_all_song_slide_img_second')
            slideItems[slideIndex + 2].classList.replace('option_all_song_slide_img_four', 'option_all_song_slide_img_third')
           }
           
       }, 3000)
       
       // xử lý đóng mở tab_song_container
       btn_down_container.onclick = function() {
            tab_song_container.style.transform = "translateY(120%)"
       }

       icon_list_check.onclick = function() {
            tab_song_container.style.transform = "translateY(0%)"     
       }

       // xử lý phát nhạc trên tab_song_container
       playlist_container_music.onclick = function(e) {
           const song_item = e.target.closest('.song__item')
           if(song_item) {
               _this.currentIndex = song_item.dataset.index
               _this.loadCurrentSong()
               audio.play()
           }
       }
    },
    next_Song: function() {
        this.currentIndex++
        if(this.currentIndex >= my_music.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prev_Song: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = my_music.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let random_index
        do{
            random_index = Math.floor(Math.random() * my_music.songs.length)
        }while(random_index === this.currentIndex)
        this.currentIndex = random_index
        this.loadCurrentSong()
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    loadCurrentSong: function() {
         var currentSong = my_music.songs[this.currentIndex]
         var title_song = $('.title_song')
         var name_song = $('.name_song')
         title_song.textContent = currentSong.name
         name_song.textContent = currentSong.singer
         avatar_song.src = currentSong.image
         audio.src = currentSong.path
         end_song.textContent = currentSong.duration
         
         //tab_song_container
         const info_name = $('.info_name')
         const singer_author = $('.singer_author')
         const image = $('.img_music_container')
         image.src = currentSong.image
         info_name.textContent = currentSong.name
         singer_author.textContent = currentSong.singer

         // on mobile
         const img_mobile_song = $('.img_mobile_song')
         const name_song_moblie = $('.name_song_moblie')
         const author_song_mobile = $('.author_song_mobile')
         img_mobile_song.src = currentSong.image
         name_song_moblie.textContent = currentSong.name
         author_song_mobile.textContent = currentSong.singer
    },
    displayRemainTime: function() {
        var remainTime = formatTime(audio.currentTime)
        start_song.innerHTML = remainTime 
    },
    start: function (){
        this.loadConfig()
        this.render()
        this.handelEvent()
        this.loadCurrentSong()

        //hiển thị lên view dựa theo config
        btn_random.classList.add(this.isRandom && "active")
        btn_repeat.classList.add(this.isRepeat && "active")
    }

}

app.start()




