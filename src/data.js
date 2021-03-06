
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase'

const fakeData = {

    listData: {
        lists: [
            {
                id: 1000,
                title: "The first list",
                owner: "dFDoH8YjcploAz2AwzIOwLNWNToP",
                created: new Date(1963, 11, 18, 14, 55, 16, 0).getTime() / 1000,
                editors: ['2', '3'],
                items: [
                    {
                        id: 2000,
                        addedBy: "dFDoH8YjcploAz2AwzIOwLNWNToP",
                        timeAdded: Date.UTC(2022, 4, 11, 23, 2, 14) / 1000,
                        itemText: "Get some stuff done",
                        completed: false,
                    },
                    {
                        id: 2001,
                        addedBy: "dFDoH8YjcploAz2AwzIOwLNWNToP",
                        timeAdded: Date.UTC(2022, 4, 11, 23, 4, 14) / 1000,
                        itemText: "Get some more stuff done",
                        completed: false,
                    },
                    {
                        id: 2002,
                        addedBy: "dFDoH8YjcploAz2AwzIOwLNWNToP",
                        timeAdded: Date.UTC(2022, 4, 11, 23, 5, 14) / 1000,
                        itemText: "Finish creating test data",
                        completed: false,
                    }
                ]
            },
            {
                id: 1001,
                title: "George's list",
                owner: 2,
                created: new Date(1970, 5, 25, 18, 16, 1, 0).getTime() / 1000,
                editors: ['3'],
                items: [
                    {
                        id: 2000,
                        addedBy: '2',
                        timeAdded: Date.UTC(2022, 5, 11, 23, 2, 14) / 1000,
                        itemText: "Get some stuff done",
                        completed: false,
                    },
                    {
                        id: 2001,
                        addedBy: '2',
                        timeAdded: Date.UTC(2022, 5, 11, 23, 4, 14) / 1000,
                        itemText: "Get some more stuff done",
                        completed: false,
                    },
                    {
                        id: 2002,
                        addedBy: '2',
                        timeAdded: Date.UTC(2022, 5, 11, 23, 5, 14) / 1000,
                        itemText: "Finish creating test data",
                        completed: false,
                    }
                ]
            }
        ]
    }
}




export const getListsByUser = (id) => {
    if (!id) return null;

    let lists = fakeData.listData.lists.filter((l) => l.owner === id || l.editors.includes(id));

    return lists
}

export const getListById = (id) => {
    let list = fakeData.listData.lists.filter(l => l.id === id)
    return list?.[0] || {}
}

export const userDAO = {
    getUserbyId: (uid) => {
        return new Promise((resolve, reject) => {
            getDoc(doc(db, 'Users/' + uid))
                .then((snap) => {
                    resolve(snap.exists ? snap.data() : null)
                })
        })
    },

    writeUserProfile: (profile) => {
        let id = profile.UID
        delete profile.UID
        return setDoc(doc(db, 'Users/' + id), profile)
    }
}