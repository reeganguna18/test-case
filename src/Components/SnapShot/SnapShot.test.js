import { render } from "@testing-library/react";
import SnapShot from "./SnapShot";

test("testing snapshot component", () => {
  const { rensSnaps } = render(<SnapShot />);
  expect(rensSnaps).toMatchSnapshot();
});
