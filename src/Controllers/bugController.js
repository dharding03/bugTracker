import Bug from '../Models/Bug';

export function retrieveBugs() {
    let data = [];

    data.push(new Bug ({
        id: 12324,
        name: "Crash on start",
        details: "Crashes after 3 seconds",
        step: "Open application and it will crash",
        version: "V 2.0",
        assigned: "Dan Harding",
        opener: "Jon Doe",
        priority: 1,
        time: "19:58",

    }))

    return data.sort((a, b) => {
        return a.priority - b.priority
    })
}

export default retrieveBugs();