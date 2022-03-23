
const useDbMock = () =>{
    const getMusiciansList = () =>{
        const list = [
            {
                name: 'Fred',
                lastName: 'Durst',
                role: 'frontman',
                band: 'Limp Bizkit',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Fred_Durst_2021_%28cropped%29.jpg/800px-Fred_Durst_2021_%28cropped%29.jpg'
            },
            {
                name: 'Wes',
                lastName: 'Borland',
                role: 'guitarist',
                band: 'Limp Bizkit',
                picture: 'https://media.pitchfork.com/photos/5abc0efb132ef4309602931e/1:1/w_395,h_395,c_limit/Limp-Bizkit-Wes-Borland.jpg'
            },
            {
                name: 'John',
                lastName: 'Otto',
                role: 'drummer',
                band: 'Limp Bizkit',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Drummer_John_Otto_of_Limp_Bizkit_in_2006.jpg'
            },
            {
                name: 'Leor',
                lastName: 'Dimant',
                role: 'DJ',
                band: 'Limp Bizkit',
                picture: 'https://images.viacbs.tech/uri/mgid:arc:imageassetref:bet.com:64af41cb-48d8-11e7-a442-0e40cf2fc285?quality=0.7'
            },
            {
                name: 'Sam',
                lastName: 'Rivers',
                role: 'bass guitarist',
                band: 'Limp Bizkit',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/13-06-07_RaR_LB_Sam_Rivers_01.jpg/1280px-13-06-07_RaR_LB_Sam_Rivers_01.jpg'
            },
            {
                name: 'Jonathan',
                lastName: 'Davis',
                role: 'frontman',
                band: 'Korn',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Jonathan_Davis_-_Korn_-_Rock_im_Park_2016.jpg/640px-Jonathan_Davis_-_Korn_-_Rock_im_Park_2016.jpg'
            },
            {
                name: 'James',
                lastName: 'Shaffer',
                role: 'guitarist',
                band: 'Limp Bizkit',
                picture: 'https://static01.nyt.com/images/2010/09/12/realestate/DEAL3/DEAL3-jumbo.jpg?quality=75&auto=webp&disable=upscale'
            },
            {
                name: 'Reginald',
                lastName: 'Arvizu',
                role: 'bass guitarist',
                band: 'Korn',
                picture: 'https://alchetron.com/cdn/reginald-arvizu-5c749219-eb80-4309-a432-c8ed8065da7-resize-750.jpeg'
            },
            {
                name: 'Brian',
                lastName: 'Welch',
                role: 'guitarist',
                band: 'Korn',
                picture: 'https://i.discogs.com/hd35zF9MKfK1jhI4fg7Q5HOTCAGsRCQgRupFuhpMlDg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTc3/MjY0MC0xMjg0MTUx/Njc5LmpwZWc.jpeg'
            },
            {
                name: 'Ray',
                lastName: 'Luzier',
                role: 'drummer',
                band: 'Korn',
                picture: 'https://static.wikia.nocookie.net/korn/images/2/20/Rayluzier.jpg/revision/latest?cb=20100224152855'
            },
        ]
        return list;
    }
    return {
        getMusiciansList
    }
}

export default useDbMock;