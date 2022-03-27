
const useDbMock = () =>{
    const getMusiciansList = () =>{
        const list = [
            {
                id: 0,
                name: 'Fred',
                lastName: 'Durst',
                role: 'frontman',
                band: 'Limp Bizkit',
                picture: 'https://townsquare.media/site/366/files/2021/07/attachment-fred_durst_limp_bizkit_2000.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89'
            },
            {
                id: 1,
                name: 'Wes',
                lastName: 'Borland',
                role: 'guitarist',
                band: 'Limp Bizkit',
                picture: 'https://www.themoviedb.org/t/p/w235_and_h235_face/mjcZkCBVYEF9qFMWqfZX112NChw.jpg'
            },
            {
                id: 2,
                name: 'John',
                lastName: 'Otto',
                role: 'drummer',
                band: 'Limp Bizkit',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Drummer_John_Otto_of_Limp_Bizkit_in_2006.jpg'
            },
            {
                id: 3,
                name: 'Leor',
                lastName: 'Dimant',
                role: 'DJ',
                band: 'Limp Bizkit',
                picture: 'https://images.unian.net/pb/002/thumb_files/h_190/209033.jpg'
            },
            {
                id: 4,
                name: 'Sam',
                lastName: 'Rivers',
                role: 'bass guitarist',
                band: 'Limp Bizkit',
                picture: 'https://townsquare.media/site/366/files/2020/01/Sam-Rivers-Limp-Bizkit.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89'
            },
            {
                id: 5,
                name: 'Jonathan',
                lastName: 'Davis',
                role: 'frontman',
                band: 'Korn',
                picture: 'https://www.billboard.com/wp-content/uploads/media/Jonathan-Davis-of-Korn-2017-reading-fest-billboard-1548.jpg?w=1024'
            },
            {
                id: 6,
                name: 'James',
                lastName: 'Shaffer',
                role: 'guitarist',
                band: 'Korn',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Korn_Rock_Im_Park_2016_%2812_von_14%29_%281%29.jpg'
            },
            {
                id: 7,
                name: 'Reginald',
                lastName: 'Arvizu',
                role: 'bass guitarist',
                band: 'Korn',
                picture: 'https://i.pinimg.com/236x/41/94/fe/4194fef9ec8cd6a0379c90e9468ab420--korn-bands.jpg'
            },
            {
                id: 8,
                name: 'Brian',
                lastName: 'Welch',
                role: 'guitarist',
                band: 'Korn',
                picture: 'https://i.discogs.com/hd35zF9MKfK1jhI4fg7Q5HOTCAGsRCQgRupFuhpMlDg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTc3/MjY0MC0xMjg0MTUx/Njc5LmpwZWc.jpeg'
            },
            {
                id: 9,
                name: 'Ray',
                lastName: 'Luzier',
                role: 'drummer',
                band: 'Korn',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Ray_Luzier_of_Korn.jpg'
            },
            {
                id: 10,
                name: 'Jared',
                lastName: 'Gomes',
                role: 'frontman',
                band: 'Hed Pe',
                picture: 'https://popularbio.com/wp-content/uploads/2020/05/Jared-Gomes-1200x1200.jpg'
            },
            {
                id: 11,
                name: 'Jeremiah',
                lastName: 'Stratton',
                role: 'drummer',
                band: 'Hed Pe',
                picture: 'https://yt3.ggpht.com/ytc/AKedOLSKuHfQBEZlLOj2sno5xnLXn4lp7MX1djw5Cc0D3g=s900-c-k-c0x00ffffff-no-rj'
            },
            {
                id: 12,
                name: 'Kurt',
                lastName: 'Blankenship',
                role: 'bass guitarist',
                band: 'Hed Pe',
                picture: 'https://www.govenuemagazine.com/wp-content/gallery/hed-pe-machine-shop/Hed-PE-12.jpg'
            },
            {
                id: 13,
                name: 'Nathan',
                lastName: 'Javier',
                role: 'guitarist',
                band: 'Hed Pe',
                picture: 'https://cdn.bandmix.com/bandmix_us/media/133/133171/97531-l.jpg'
            },
            {
                id: 14,
                name: 'Till',
                lastName: 'Lindemann',
                role: 'frontman',
                band: 'Rammstein',
                picture: 'https://i0.wp.com/www.rammsteinpress.com/wp-content/uploads/2016/11/Bnlz1a_X0et_I.jpg?fit=1280%2C853&ssl=1'
            },
            {
                id: 15,
                name: 'Paul',
                lastName: 'Landers',
                role: 'guitarist',
                band: 'Rammstein',
                picture: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/095bb27d-3c41-4fd2-98f8-e561ee33bcda/d771nyb-1d58f7f6-b0ca-4bb1-b6d7-85d4b770980f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5NWJiMjdkLTNjNDEtNGZkMi05OGY4LWU1NjFlZTMzYmNkYVwvZDc3MW55Yi0xZDU4ZjdmNi1iMGNhLTRiYjEtYjZkNy04NWQ0Yjc3MDk4MGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yqOVdq_ASGRPi4gyPn-Iod4bFgilYJ7rPe3ZuBkbZGI'
            },
            {
                id: 16,
                name: 'Christoph',
                lastName: 'Schneider',
                role: 'drummer',
                band: 'Rammstein',
                picture: 'https://cdn.mos.cms.futurecdn.net/rwNC8TZZpZ5WqfVpX7Z59g.jpg'
            },
            {
                id: 17,
                name: 'Christian',
                lastName: 'Lorenz',
                role: 'keyboard player',
                band: 'Rammstein',
                picture: 'https://cloudfront-eu-central-1.images.arcpublishing.com/rtl/FXBWTXKG3XEIKO6RZ7EWXWY3GA.jpg'
            },
            {
                id: 18,
                name: 'Richard',
                lastName: 'Kruspe',
                role: 'guitarist',
                band: 'Rammstein',
                picture: 'https://thoughtsallsorts.files.wordpress.com/2017/09/richardkruspe.jpg?w=337&h=351'
            },
            {
                id: 19,
                name: 'Oliver',
                lastName: 'Riedel',
                role: 'bass guitarist',
                band: 'Rammstein',
                picture: 'https://i.pinimg.com/originals/e4/56/ac/e456ac3dca77fc14c92c0a926b7cdf8a.jpg'
            },
            {
                id: 20,
                name: 'Donita',
                lastName: 'Sparks',
                role: 'frontman',
                band: 'L7',
                picture: 'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tLzE4ZWQ2ZmJhMjczMjhkYWNkYTMzOGY3ZTBiMTJhYzUzLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D'
            },
            {
                id: 21,
                name: 'Suzanne',
                lastName: 'Gardner',
                role: 'guitarist',
                band: 'L7',
                picture: 'https://image.tmdb.org/t/p/original/sVzDCCdVTH4ZEXWkoQIpm5Hq8g5.jpg'
            },
            {
                id: 22,
                name: 'Jennifer',
                lastName: 'Finch',
                role: 'bass guitarist',
                band: 'L7',
                picture: 'https://1yd4xt11c7is39w2ckdxdls5-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Jennifer_Precious_finch_main_750.jpeg'
            },
            {
                id: 23,
                name: 'Demetra',
                lastName: 'Plakas',
                role: 'drummer',
                band: 'L7',
                picture: 'https://www.personality-database.com/profile_images/11982.png'
            },
            {
                id: 24,
                name: 'Vithia',
                lastName: '',
                role: 'frontman',
                band: 'Rise of the Northstar',
                picture: 'https://i.pinimg.com/originals/ed/8d/81/ed8d817ba3dbdf726e90b4b98133a22a.jpg'
            },            
            {
                id: 25,
                name: 'Eva-B',
                lastName: '',
                role: 'guitarist',
                band: 'Rise of the Northstar',
                picture: 'https://live.staticflickr.com/926/43439194752_b6521a0794_b.jpg'
            },
            {
                id: 26,
                name: 'Fabulous Fab',
                lastName: '',
                role: 'bass guitarist',
                band: 'Rise of the Northstar',
                picture: 'http://www.shootmeagain.com/photo/Y2015/4865/lowres/riseofthenorthstar-colmar_04-04-2015_1.jpg'
            },
            {
                id: 27,
                name: 'Phantom',
                lastName: '',
                role: 'drummer',
                band: 'Rise of the Northstar',
                picture: 'https://www.summer-breeze.de/wp-content/uploads/2019/08/18/RiseOfTheNorthstar_PK_20190817_151.jpg'
            },
        ]
        return list;
    }
    return {
        getMusiciansList
    }
}

export default useDbMock;