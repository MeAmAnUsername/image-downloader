const diskdb = require('diskdb');

const db = diskdb.connect('databases/', ['submissions']);

interface submission {
  site: string
  filepath: any // todo
  username: string
  description: string
  date: any // todo
}

const sub: submission = {
  site: "FA",
  filepath: null,
  username: "babystar",
  description: "some art of Star I guess",
  date: "today"
}

db.submissions.save(sub)
