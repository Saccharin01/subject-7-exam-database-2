const Database = require("better-sqlite3");
const DbPathCheck = require("./DbPathCheck");

//TODO : Sqlite Query문 실행에 관한 메소드가 필요합니다.
class Sqlite {
  constructor(dbName){
    //* dbName으로 Database 객체를 생성한다.
    this.db =  new Database(DbPathCheck(dbName), {verbose : console.log});
  }
}

module.exports = Sqlite