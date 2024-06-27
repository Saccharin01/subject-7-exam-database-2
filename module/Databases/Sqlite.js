const Database = require("better-sqlite3");
const DbPathCheck = require("./DbPathCheck");

//TODO : Sqlite Query문 실행에 관한 메소드가 필요합니다.
class Sqlite {
  constructor(dbName){
    //* dbName으로 Database 객체를 생성한다.
    this.db =  new Database(DbPathCheck(dbName), {verbose : console.log});
  }

    /**
   * 모든 종류의 SQL 쿼리 실행
   * @param {string} query - 실행할 SQL 쿼리
   * @param {Array} params - 쿼리에 바인딩할 매개변수
   * @returns {Object} - 쿼리 실행 결과
   */
    runQuery(query, params = []) {
      try {
        const stmt = this.db.prepare(query);
        const result = stmt.run(params);
        return result;
      } catch (err) {
        console.error('Error running query:', err.message);
        throw err;
      }
    }
  
    /**
     * 단일 행 반환 쿼리 실행
     * @param {string} query - 실행할 SQL 쿼리
     * @param {Array} params - 쿼리에 바인딩할 매개변수
     * @returns {Object} - 쿼리 실행 결과의 첫 번째 행
     */
    get(query, params = []) {
      try {
        const stmt = this.db.prepare(query);
        const result = stmt.get(params);
        return result;
      } catch (err) {
        console.error('Error running get query:', err.message);
        throw err;
      }
    }
  
    /**
     * 여러 행 반환 쿼리 실행
     * @param {string} query - 실행할 SQL 쿼리
     * @param {Array} params - 쿼리에 바인딩할 매개변수
     * @returns {Array} - 쿼리 실행 결과의 모든 행
     */
    all(query, params = []) {
      try {
        const stmt = this.db.prepare(query);
        const result = stmt.all(params);
        return result;
      } catch (err) {
        console.error('Error running all query:', err.message);
        throw err;
      }
    }
  
    /**
     * 데이터베이스 닫기 메서드
     */
    close() {
      try {
        this.db.close();
        console.log('Database closed successfully.');
      } catch (err) {
        console.error('Error closing database:', err.message);
        throw err;
      }
    }
}

module.exports = Sqlite