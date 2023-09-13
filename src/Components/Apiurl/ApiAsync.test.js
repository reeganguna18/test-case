import { fetchData, fetchDataProm, fetchDatas } from "./ApiAync";

describe("testing async components", () => {
  test("testing callback", (done) => {
    fetchData((data) => {
      expect(data).toBe("Mock Data");
      done();
    });
  });

  test("fetch data using promise", async () => {
    const prom = await fetchDataProm();

    expect(prom).toBe("Mock Prom Data");
  });

//   test("asynchronoust testing using resolves", () => {
//     return expect(fetchDatas()).resolves.toBe("Mock Data");
//   });
  test("asynchronoust testing using rejects", () => {
    return expect(fetchDatas()).rejects.toMatch("error occured");
  });
});
