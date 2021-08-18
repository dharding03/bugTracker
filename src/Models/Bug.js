function bug(bug) {
    if(bug !== undefined) {
        this.id = bug.id;
        this.name = bug.details;
        this.details = bug.details;
        this.step = bug.step;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.opener = bug.opener;
        this.time = bug.time;
    }
}

export default bug;