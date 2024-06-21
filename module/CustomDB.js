const Sqlite = require("./Databases/Sqlite");

class CustomDB extends Sqlite{
  constructor(dbPath){
    new(dbPath);
    this.CreateClass();
  }

  //TODO 쿼리문 실행 메소드가 필요함.
  //TODO Issue#10 이 완료되면 작성하겠음.
  CreateClass(){

  }
}