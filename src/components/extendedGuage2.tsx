import { useEffect, useMemo } from "react";

interface typeNumber {
  id?: string;
  percentage: number;
}
export default function ExtendedGuage2({
  id,
  percentage,
}: typeNumber): JSX.Element {
  let barList: any[];

  function setPercentage(percentage: number) {
    let barId: number = Math.round((percentage * 23) / 100);
    if (barId < 1) barId = 1;
    for (let index = 1; index < barId; index++) {
      //const element = barList[index];
      let barSelector: string = `bar${index}`;
      document.getElementById(barSelector)?.classList.add("red");
      //barList[index].classList.add("red");
    }
    for (let index = barId; index < 23; index++) {
      //const element = barList[index];
      let barSelector: string = `bar${index}`;
      document.getElementById(barSelector)?.classList.remove("red");
    }
  }

  useEffect(() => {
    setPercentage(percentage);
  }, [percentage]);

  //----Mount
  useEffect(() => {
    barList = Array(23)
      .fill("")
      .map((value, index) => {
        let barSelector: string = `bar${index + 1}`;
        let barPathlement = document.getElementById(barSelector);
        return barPathlement;
      });
    console.log("SVG path elements in barlist[]= " + barList);
  }, []);

  return (
    <svg
      id={id}
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 890 389"
      width="80"
      height="35"
    >
      <style>{`.a{fill:#3de0e0}`}</style>
      <path
        className="a"
        d="m190.8 364.5c-10.7 0-21.4-0.9-31.9-2.9l2-10.8c9.8 1.8 19.9 2.7 29.9 2.7zm-45.8-6c-10.3-2.8-20.4-6.6-30-11.3l4.8-9.9c9 4.4 18.5 7.9 28.1 10.5zm-42.6-17.9c-9.2-5.4-17.9-11.7-26-18.7l7.2-8.3c7.6 6.6 15.8 12.5 24.4 17.5zm-36.4-28.4c-7.5-7.7-14.3-16-20.2-24.9l9.1-6.1c5.6 8.3 12 16.1 19 23.3zm-27.7-37c-5.2-9.3-9.6-19.2-13-29.3l10.4-3.5c3.2 9.4 7.3 18.7 12.2 27.4zm-17-42.9c-2.6-10.4-4.2-21-4.9-31.7l11-0.7c0.6 10 2.2 20 4.6 29.7z"
      />
      <path
        className="a"
        d="m190.8 364.5v-11c90.2 0 163.7-73.4 163.7-163.6h11c0 23.6-4.7 46.5-13.8 68-8.8 20.8-21.3 39.5-37.4 55.5-16 16-34.7 28.6-55.5 37.4-21.5 9.1-44.4 13.7-68 13.7z"
      />
      <path
        className="a"
        d="m354.2 180c-0.6-10-2.2-20-4.6-29.7l10.7-2.7c2.6 10.4 4.2 21 4.9 31.7zm-8.3-42.5c-3.2-9.4-7.3-18.7-12.2-27.4l9.6-5.4c5.2 9.3 9.6 19.2 13 29.3zm-19.2-38.8c-5.5-8.3-11.9-16.1-18.9-23.3l7.8-7.7c7.5 7.7 14.3 16 20.3 24.9zm-28.7-32.4c-7.6-6.6-15.8-12.5-24.4-17.6l5.6-9.5c9.2 5.4 17.9 11.7 26 18.7zm-36.1-23.8c-9.1-4.3-18.5-7.9-28.2-10.5l2.9-10.6c10.3 2.8 20.4 6.6 30.1 11.2zm-41.2-13.5c-9.8-1.8-19.8-2.7-29.9-2.7v-11c10.7 0 21.5 1 31.9 2.9z"
      />
      <path
        className="a"
        d="m27.2 189.9h-11c0-23.6 4.6-46.4 13.7-68 8.8-20.8 21.4-39.4 37.4-55.5 16.1-16 34.7-28.6 55.5-37.4 21.6-9.1 44.5-13.7 68-13.7v11c-90.2 0-163.6 73.4-163.6 163.6z"
      />
      <path
        fill-rule="evenodd"
        className="a"
        d="m190.8 337c-39.3 0-76.2-15.3-104-43.1-27.8-27.8-43.1-64.7-43.1-104 0-39.3 15.3-76.2 43.1-104 27.8-27.8 64.7-43.1 104-43.1 39.3 0 76.2 15.3 104 43.1 27.8 27.8 43.1 64.7 43.1 104 0 39.3-15.3 76.2-43.1 104-27.8 27.8-64.7 43.1-104 43.1zm0-284.9c-76 0-137.8 61.8-137.8 137.8 0 76 61.8 137.8 137.8 137.8 76 0 137.8-61.8 137.8-137.8 0-76-61.8-137.8-137.8-137.8z"
      />
      <path
        fill-rule="evenodd"
        className="a"
        d="m190.8 344.6c-41.3 0-80.1-16.1-109.4-45.3-29.2-29.2-45.3-68.1-45.3-109.4 0-41.3 16.1-80.2 45.3-109.4 29.3-29.2 68.1-45.3 109.4-45.3 41.4 0 80.2 16.1 109.4 45.3 29.2 29.2 45.3 68.1 45.3 109.4 0 41.3-16.1 80.2-45.3 109.4-29.2 29.2-68 45.3-109.4 45.3zm0-308c-84.5 0-153.3 68.8-153.3 153.3 0 84.6 68.8 153.3 153.3 153.3 84.6 0 153.4-68.7 153.4-153.3 0-84.5-68.8-153.3-153.4-153.3z"
      />
      <path
        className="a"
        d="m222.4 388.5l-2-12.5c26.5-4.2 51.4-13.8 73.9-28.6l7 10.6c-24 15.8-50.6 26.1-78.9 30.5z"
      />
      <path
        className="a"
        d="m312.9 349.7l-10.7-6.5c23.5-18 43.4-41.3 57.5-67.3l8.1 9.5c-6.7 12.5-14.8 24.3-24.1 35.1-9.2 10.8-19.6 20.6-30.8 29.2z"
      />
      <path
        className="a"
        d="m12 130.4l-12-4c4.5-13.5 10.4-26.6 17.7-38.9 7.2-12.1 15.7-23.6 25.3-33.9l9.3 8.6c-18.3 19.8-31.8 42.8-40.3 68.2z"
      />
      <path
        className="a"
        d="m55 58.1l-1.6-13.5c10.3-9.7 21.7-18.3 33.7-25.6 12.3-7.4 25.3-13.6 38.8-18.2l11.2 7.7c-30.7 10.6-58.3 27.3-82.1 49.6z"
      />
      <path
        className="a"
        d="m69.1 189.9h-8.2c0-34.7 13.5-67.3 38-91.9 24.6-24.5 57.2-38 91.9-38v8.2c-67.1 0-121.7 54.6-121.7 121.7z"
      />
      <path
        className="a"
        d="m190.8 319.8v-8.2c67.2 0 121.8-54.6 121.8-121.7h8.2c0 34.7-13.6 67.3-38.1 91.9-24.5 24.5-57.2 38-91.9 38z"
      />
      <path
        className="a"
        d="m17.7 189.9h-16.6c0-25.6 5.1-50.4 14.9-73.8 9.6-22.6 23.3-42.9 40.7-60.3 17.4-17.4 37.7-31.1 60.3-40.7 23.4-9.9 48.2-14.9 73.8-14.9v16.5c-95.5 0-173.1 77.7-173.1 173.2z"
      />
      <path
        className="a"
        d="m190.8 379.6v-16.5c95.5 0 173.2-77.7 173.2-173.2h16.5c0 25.6-5 50.5-14.9 73.8-9.6 22.6-23.2 42.9-40.6 60.3-17.5 17.5-37.7 31.1-60.3 40.7-23.4 9.9-48.3 14.9-73.9 14.9z"
      />
      <path
        className="a"
        d="m468.1 298.6h-142.1v-2.8h141.4l23.4-11.4h379.1l14-15.7v-36.3l-14.8-16.3v-83.2l-12.5-15.3h-530.6v-2.7h531.9l14 17v83.1l14.7 16.4v38.3l-15.5 17.5h-379.7z"
      />
      <path className="a" d="m876.9 211.2l-6.4 3.9v-49.4l6.4 3.9z" />
      <path className="a" d="m518.5 116.2h-98.8l8.4-13.3h81.9z" />
      <path
        fill-rule="evenodd"
        className="a"
        d="m848.6 214.6h-447.1v-38.8h447.1zm-444.4-2.8h441.6v-33.2h-441.6z"
      />
      <path id={"bar1"} className="bar1" d="m439 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar2"} className="bar2" d="m419.8 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar3"} className="bar3" d="m458.2 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar4"} className="bar4" d="m477.5 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar5"} className="bar5" d="m496.7 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar6"} className="bar6" d="m516 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar7"} className="bar7" d="m535.2 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar8"} className="bar8" d="m554.5 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar9"} className="bar9" d="m573.7 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar10"} className="bar10" d="m592.9 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar11"} className="bar11" d="m612.2 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar12"} className="bar12" d="m631.4 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar13"} className="bar13" d="m650.7 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar14"} className="bar14" d="m669.9 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar15"} className="bars" d="m689.1 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar16"} className="bar16" d="m708.4 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar17"} className="bar17" d="m727.6 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar18"} className="bar18" d="m746.9 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar19"} className="bar19" d="m766.1 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar20"} className="bar20" d="m785.4 210.1h-12.9v-29.9h12.9z" />
      <path id={"bar21"} className="bar21" d="m804.6 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar22"} className="bar22" d="m823.8 210.1h-12.8v-29.9h12.8z" />
      <path id={"bar23"} className="bar23" d="m843.1 210.1h-12.9v-29.9h12.9z" />
      <path className="a" d="m377.1 292.8v-10.1h2.1v8.4h5.1v1.7z" />
      <path
        fill-rule="evenodd"
        className="a"
        d="m385.3 287.8q0-1.5 0.5-2.6 0.3-0.8 0.9-1.4 0.6-0.6 1.3-0.9 1-0.4 2.2-0.4 2.3 0 3.6 1.4 1.4 1.4 1.4 3.9 0 2.4-1.4 3.8-1.3 1.4-3.6 1.4-2.2 0-3.6-1.4-1.3-1.4-1.3-3.8zm2.1-0.1q0 1.8 0.8 2.7 0.8 0.8 2 0.8 1.3 0 2.1-0.8 0.7-0.9 0.7-2.7 0-1.7-0.7-2.6-0.8-0.9-2.1-0.9-1.2 0-2 0.9-0.8 0.9-0.8 2.6z"
      />
      <path
        fill-rule="evenodd"
        className="a"
        d="m405.9 292.8h-2.2l-0.9-2.3h-4.1l-0.8 2.3h-2.2l4-10.1h2.2zm-3.8-4.1l-1.4-3.7-1.4 3.7z"
      />
      <path
        fill-rule="evenodd"
        className="a"
        d="m407 282.7h3.8q1.2 0 1.9 0.2 0.9 0.2 1.5 0.9 0.7 0.7 1 1.6 0.3 1 0.3 2.4 0 1.3-0.3 2.2-0.4 1.1-1.1 1.8-0.5 0.5-1.4 0.8-0.7 0.2-1.8 0.2h-3.9zm2.1 1.7v6.8h1.5q0.9 0 1.2-0.1 0.5-0.1 0.9-0.4 0.3-0.3 0.5-1 0.2-0.7 0.2-1.9 0-1.2-0.2-1.8-0.2-0.6-0.6-1-0.4-0.3-0.9-0.5-0.5-0.1-1.7-0.1z"
      />
      <path className="a" d="m417.2 292.8v-10.1h2.1v10.1z" />
      <path
        className="a"
        d="m421.2 292.8v-10.1h2l4.2 6.8v-6.8h1.9v10.1h-2.1l-4.1-6.6v6.6z"
      />
      <path
        className="a"
        d="m436.2 289.1v-1.7h4.4v4q-0.6 0.7-1.8 1.1-1.3 0.5-2.5 0.5-1.6 0-2.8-0.7-1.2-0.6-1.8-1.9-0.6-1.2-0.6-2.7 0-1.6 0.7-2.8 0.7-1.2 1.9-1.9 1-0.5 2.5-0.5 1.9 0 2.9 0.8 1.1 0.8 1.4 2.2l-2 0.4q-0.3-0.8-0.9-1.2-0.5-0.5-1.4-0.5-1.4 0-2.2 0.9-0.8 0.8-0.8 2.5 0 1.8 0.8 2.7 0.8 0.9 2.1 0.9 0.7 0 1.3-0.2 0.7-0.3 1.2-0.6v-1.3z"
      />
      <path className="a" d="m442.5 292.8v-1.9h2v1.9z" />
      <path className="a" d="m446.5 292.8v-1.9h1.9v1.9z" />
      <path className="a" d="m450.4 292.8v-1.9h1.9v1.9z" />
      <path className="a" d="m454.3 292.8v-1.9h2v1.9z" />
      <path className="a" d="m458.3 292.8v-1.9h1.9v1.9z" />
      <path
        className="a"
        d="m380.3 113.9h-40.6l4.7-6.1h32.9l12.8-17.5h21.6l2.5 2.8h159.1v3.3h-180.1z"
      />
      <path className="a" d="m539.3 92.2h-49.1l2-4.8h45z" />
      <path className="a" d="m565.6 89.8h-34.3v-1.7h34.3z" />
      <path className="a" d="m573.9 89.8h-10.4v-3.8h10.4z" />
      <path className="a" d="m777.2 116.2h-278.7l8.9-9.1h260.8z" />
      <path className="a" d="m770.2 293h-270.4l-8.7-7.2h287.8z" />
      <path className="a" d="m856.1 113.9h-77.2v-4.8h77.2z" />
      <path className="a" d="m871.4 216.5l-6.2-2v-34.3l6.2-2z" />
      <path
        className="a"
        d="m172.3 214.1h-34.1v-9l16.8-30.8q2.7-5 2.7-13.7 0-4.6-3-4.6-3.1 0-3.1 2.9v11.6h-13.4v-11.8q0-13.1 16.9-13.1 10.4 0 13.8 4.8 3.4 4.8 3.4 15.8 0 4.3-1.5 7.1l-16.8 32.1h18.3z"
      />
      <path
        fill-rule="evenodd"
        className="a"
        d="m174.9 202.5v-43.7q0-13.2 17.5-13.2 17.3 0 17.3 13.1v43.7q0 5.9-4.9 9.1-4.8 3.2-12.5 3.2-7.8 0-12.6-3.2-4.8-3.1-4.8-9zm19.9 0.7v-46.3q0-2-2.5-2-2.5 0-2.5 2v46.3q0 2 2.5 2 2.5 0 2.5-2z"
      />
      <path
        fill-rule="evenodd"
        className="a"
        d="m243.4 146.2l-24.6 67.9h-6.5l24.6-67.9zm-30.2 22.2v-17.9q0-4.8 6.6-4.8 6.6 0 6.6 4.8v17.9q0 4.3-6.6 4.3-6.6 0-6.6-4.3zm7.5 0.2v-18.8q0-0.7-0.9-0.7-0.9 0-0.9 0.7v18.8q0 0.8 0.9 0.8 0.9 0 0.9-0.8zm8.8 41.9v-18q0-4.7 6.5-4.7 6.7 0 6.7 4.7v18q0 4.3-6.7 4.3-6.5 0-6.5-4.3zm7.5 0.2v-18.8q0-0.7-0.9-0.7-1 0-1 0.7v18.8q0 0.8 1 0.8 0.9 0 0.9-0.8z"
      />
      <path className="a" d="m766.5 287.1h-159.9l4.7-9.1h150.4z" />
      <path className="a" d="m827.2 285.8h-69.2v-4h65.8z" />
      <path className="a" d="m821.5 283.8h-47.3l2.9-5.8h41.5z" />
      <path className="a" d="m858.8 235h-491v-11.6h491z" />
      <path className="a" d="m864.4 245.5l-13.9-13.9 8.3-8.2 13.9 13.9z" />
      <path className="a" d="m889.7 267.1l-4.5 2.4v-35.1l4.5 2.4z" />
      <path className="a" d="m431.7 266.8h-73.3v-13h73.3z" />
      <path className="a" d="m465.2 263.6h-37.5v-6.6h37.5z" />
      <path
        className="a"
        d="m610.8 289.3l-12.3-11.4h-48.3l-35-28.4h-49.4l-16.3 10.2-2.2-3.5 17.3-10.8h52.1l35 28.4h48.5l13.4 12.4z"
      />
    </svg>
  );
}
