
const useDbMock = () =>{
    const list =  [
        {
            id: 0,
            name: 'Fred',
            lastName: 'Durst',
            role: 'frontman',
            band: 'Limp Bizkit',
            picture: 'https://i.ibb.co/fYF8vKY/attachment-fred-durst-limp-bizkit-2000.jpg'
        },
        {
            id: 1,
            name: 'Wes',
            lastName: 'Borland',
            role: 'guitarist',
            band: 'Limp Bizkit',
            picture: 'https://i.ibb.co/C75Pkst/mjc-Zk-CBVYEF9q-FMWqf-ZX112-NChw.jpg'
        },
        {
            id: 2,
            name: 'John',
            lastName: 'Otto',
            role: 'drummer',
            band: 'Limp Bizkit',
            picture: 'https://i.ibb.co/JjdkG4G/Drummer-John-Otto-of-Limp-Bizkit-in-2006.jpg'
        },
        {
            id: 3,
            name: 'Leor',
            lastName: 'Dimant',
            role: 'DJ',
            band: 'Limp Bizkit',
            picture: 'https://i.ibb.co/bL11tk6/209033.jpg'
        },
        {
            id: 4,
            name: 'Sam',
            lastName: 'Rivers',
            role: 'bass guitarist',
            band: 'Limp Bizkit',
            picture: 'https://i.ibb.co/16ZbZYP/Sam-Rivers-Limp-Bizkit.jpg'
        },
        {
            id: 5,
            name: 'Jonathan',
            lastName: 'Davis',
            role: 'frontman',
            band: 'Korn',
            picture: 'https://i.ibb.co/fvpgJsx/Screenshot-2022-04-07-185316.png'
        },
        {
            id: 6,
            name: 'James',
            lastName: 'Shaffer',
            role: 'guitarist',
            band: 'Korn',
            picture: 'https://i.ibb.co/vvVk9SB/Korn-Rock-Im-Park-2016-12-von-14-1.jpg'
        },
        {
            id: 7,
            name: 'Reginald',
            lastName: 'Arvizu',
            role: 'bass guitarist',
            band: 'Korn',
            picture: 'https://i.ibb.co/ZSxGBcf/4194fef9ec8cd6a0379c90e9468ab420-korn-bands.jpg'
        },
        {
            id: 8,
            name: 'Brian',
            lastName: 'Welch',
            role: 'guitarist',
            band: 'Korn',
            picture: 'https://i.ibb.co/njr6XD9/A-772640-1284151679.jpg'
        },
        {
            id: 9,
            name: 'Ray',
            lastName: 'Luzier',
            role: 'drummer',
            band: 'Korn',
            picture: 'https://i.ibb.co/ZdCntBJ/Ray-Luzier-of-Korn.jpg'
        },
        {
            id: 10,
            name: 'Jared',
            lastName: 'Gomes',
            role: 'frontman',
            band: 'Hed Pe',
            picture: 'https://i.ibb.co/wJ4BHdT/Jared-Gomes-1200x1200.jpg'
        },
        {
            id: 11,
            name: 'Jeremiah',
            lastName: 'Stratton',
            role: 'drummer',
            band: 'Hed Pe',
            picture: 'https://i.ibb.co/YRSTZhH/unnamed.jpg'
        },
        {
            id: 12,
            name: 'Kurt',
            lastName: 'Blankenship',
            role: 'bass guitarist',
            band: 'Hed Pe',
            picture: 'https://i.ibb.co/RhGb2PC/Hed-PE-12.jpg'
        },
        {
            id: 13,
            name: 'Nathan',
            lastName: 'Javier',
            role: 'guitarist',
            band: 'Hed Pe',
            picture: 'https://i.ibb.co/2PtrGKL/97531-l.jpg'
        },
        {
            id: 14,
            name: 'Till',
            lastName: 'Lindemann',
            role: 'frontman',
            band: 'Rammstein',
            picture: 'https://i.ibb.co/yPrW6w8/Screenshot-2022-04-07-185410.png'
        },
        {
            id: 15,
            name: 'Paul',
            lastName: 'Landers',
            role: 'guitarist',
            band: 'Rammstein',
            picture: 'https://i.ibb.co/1QqgzCH/d771nyb-1d58f7f6-b0ca-4bb1-b6d7-85d4b770980f.jpg'
        },
        {
            id: 16,
            name: 'Christoph',
            lastName: 'Schneider',
            role: 'drummer',
            band: 'Rammstein',
            picture: 'https://i.ibb.co/kmH6LHQ/rw-NC8-TZZp-Z5-Wqf-Vp-X7-Z59g.jpg'
        },
        {
            id: 17,
            name: 'Christian',
            lastName: 'Lorenz',
            role: 'keyboard player',
            band: 'Rammstein',
            picture: 'https://i.ibb.co/Qpbj8Nh/FXBWTXKG3-XEIKO6-RZ7-EWXWY3-GA.jpg'
        },
        {
            id: 18,
            name: 'Richard',
            lastName: 'Kruspe',
            role: 'guitarist',
            band: 'Rammstein',
            picture: 'https://i.ibb.co/VQ5WswK/Screenshot-2022-04-07-185442.png'
        },
        {
            id: 19,
            name: 'Oliver',
            lastName: 'Riedel',
            role: 'bass guitarist',
            band: 'Rammstein',
            picture: 'https://i.ibb.co/gVM4Jqz/e456ac3dca77fc14c92c0a926b7cdf8a.jpg'
        },
        {
            id: 20,
            name: 'Donita',
            lastName: 'Sparks',
            role: 'frontman',
            band: 'L7',
            picture: 'https://i.ibb.co/1LTrgcW/Screenshot-2022-04-07-185501.png'
        },
        {
            id: 21,
            name: 'Suzanne',
            lastName: 'Gardner',
            role: 'guitarist',
            band: 'L7',
            picture: 'https://i.ibb.co/71fLJgq/s-Vz-DCCd-VTH4-ZEXWko-QIpm5-Hq8g5.jpg'
        },
        {
            id: 22,
            name: 'Jennifer',
            lastName: 'Finch',
            role: 'bass guitarist',
            band: 'L7',
            picture: 'https://i.ibb.co/QHVvJj9/Jennifer-Precious-finch-main-750.jpg'
        },
        {
            id: 23,
            name: 'Demetra',
            lastName: 'Plakas',
            role: 'drummer',
            band: 'L7',
            picture: 'https://i.ibb.co/f00L9qZ/11982.png'
        },
        {
            id: 24,
            name: 'Vithia',
            lastName: '',
            role: 'frontman',
            band: 'Rise of the Northstar',
            picture: 'https://i.ibb.co/DtVZNBS/ed8d817ba3dbdf726e90b4b98133a22a.jpg'
        },            
        {
            id: 25,
            name: 'Eva-B',
            lastName: '',
            role: 'guitarist',
            band: 'Rise of the Northstar',
            picture: 'https://i.ibb.co/PQyZCM3/43439194752-b6521a0794-b.jpg'
        },
        {
            id: 26,
            name: 'Fabulous Fab',
            lastName: '',
            role: 'bass guitarist',
            band: 'Rise of the Northstar',
            picture: 'https://i.ibb.co/9gsfFLP/G05w9fpqe-Hs-ORwvb6dwws-Ch-ZTUg.jpg'
        },
        {
            id: 27,
            name: 'Phantom',
            lastName: '',
            role: 'drummer',
            band: 'Rise of the Northstar',
            picture: 'https://i.ibb.co/7t2MfGV/Rise-Of-The-Northstar-PK-20190817-151.jpg'
        },
    ]
    const getMusiciansList = () =>{
        return list;
    }
    return {
        getMusiciansList
    }
}

export default useDbMock;