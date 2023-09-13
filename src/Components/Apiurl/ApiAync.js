export function fetchData(callBack) {
    setTimeout(() => {
      const data = "Mock Data";
      callBack(data);
    }, 2000);
  }
  
  export function fetchDataProm() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const datas = "Mock Prom Data";
        resolve(datas);
      }, 1000);
    });
  }
  
  export function fetchDatas() {
      return new Promise((resolves, rejects)=> {
          setTimeout(() => {
              const error = true;
              if(error) {
                  rejects("error occured")
              }else {
                  resolves("Mock Data")
              }
          }, 1000);
      })
  }
  