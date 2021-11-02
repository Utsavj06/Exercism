//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    //console.log(this.matrix)
  }
  
  get rows() {
     let row = this.matrix;
     let rowCount = row.split("\n");
     //console.log(rowCount);

    let abc = rowCount.map(norow =>{
           let bcd = norow.split(" ");
           //console.log(bcd)
           let cde = bcd.map(i=>Number(i));
           //console.log(cde)
           return cde;
       })
    //console.log(abc);
    return abc;
  }
  get columns() {
     const columns = [];
    // let a = this.matrix;
    // console.log(a);
    // const b = a.split("\n");
    // console.log(b);
    console.log(this.rows);
    for (let i=0 ; i<=this.rows.length ; i++){
       columns[i] = this.rows.map(row=>Number(row[i]))
    }
    //console.log(columns);
    return columns;
  }
}
