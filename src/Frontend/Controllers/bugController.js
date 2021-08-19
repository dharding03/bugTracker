import Bug from '../Models/Bug';

export function retrieveBugs() {
    let data = [];

    data.push(new Bug ({
        id: 12324,
        name: "Crash on start",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V 2.0",
        assigned: "Dan Harding",
        creator: "Jon Doe",
        priority: 1,
        time: "19:58",

    }))

    data.push(new Bug ({
        id: 12325,
        name: "Won't Start",
        details: "Application will not boot up",
        steps: "Attempt to boot application",
        version: "V 2.3",
        assigned: "Dan Harding",
        creator: "Joey Smith",
        priority: 3,
        time: "19:58",

    }))

    return data.sort((a, b) => {
        return a.priority - b.priority
    })
}

export default retrieveBugs();