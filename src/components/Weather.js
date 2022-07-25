import { useEffect, useState, memo } from "react";
import axios from "axios";
import { useFormContext } from "../context/FormContext";

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function Weather() {
  const { city } = useFormContext();
  const [weather, setWeather] = useState([]);
  let weatherimg = "";
  let backgroundClr = "";
  let textClr = "";
  let weatherList = [];
  useEffect(() => {
    const obwet = [
      {
        moonrise_ts: 1658705648,
        wind_cdir: "DGD",
        rh: 38,
        pres: 969,
        high_temp: 31.4,
        sunset_ts: 1658769607,
        ozone: 323.9,
        moon_phase: 0.0397103,
        wind_gust_spd: 5.9,
        snow_depth: 0,
        clouds: 3,
        ts: 1658696460,
        sunrise_ts: 1658717496,
        app_min_temp: 19.3,
        wind_spd: 2.6,
        pop: 0,
        wind_cdir_full: "doğu-güneydoğu",
        slp: 1011.5,
        moon_phase_lunation: 0.91,
        valid_date: "2022-07-25",
        app_max_temp: 29.6,
        vis: 24.128,
        dewpt: 10.1,
        snow: 0,
        uv: 9.8,
        weather: {
          icon: "c02d",
          code: 801,
          description: "Az bulutlu",
        },
        wind_dir: 113,
        max_dhi: null,
        clouds_hi: 8,
        precip: 0,
        low_temp: 16.4,
        max_temp: 31.4,
        moonset_ts: 1658765544,
        datetime: "2022-07-25",
        temp: 25.1,
        min_temp: 20.1,
        clouds_mid: 0,
        clouds_low: 0,
      },
      {
        moonrise_ts: 1658794745,
        wind_cdir: "DKD",
        rh: 50,
        pres: 968.3,
        high_temp: 30.1,
        sunset_ts: 1658855952,
        ozone: 315.1,
        moon_phase: 0.011249,
        wind_gust_spd: 6.5,
        snow_depth: 0,
        clouds: 0,
        ts: 1658782860,
        sunrise_ts: 1658803949,
        app_min_temp: 16.4,
        wind_spd: 3,
        pop: 0,
        wind_cdir_full: "doğu-kuzeydoğu",
        slp: 1010.9,
        moon_phase_lunation: 0.94,
        valid_date: "2022-07-26",
        app_max_temp: 29.1,
        vis: 24.128,
        dewpt: 12.5,
        snow: 0,
        uv: 9.8,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 77,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 17.1,
        max_temp: 30.1,
        moonset_ts: 1658854681,
        datetime: "2022-07-26",
        temp: 23.2,
        min_temp: 16.4,
        clouds_mid: 0,
        clouds_low: 7,
      },
      {
        moonrise_ts: 1658884244,
        wind_cdir: "D",
        rh: 33,
        pres: 966.9,
        high_temp: 32.2,
        sunset_ts: 1658942296,
        ozone: 301.1,
        moon_phase: 0.00177794,
        wind_gust_spd: 7.4,
        snow_depth: 0,
        clouds: 0,
        ts: 1658869260,
        sunrise_ts: 1658890402,
        app_min_temp: 17.1,
        wind_spd: 3.2,
        pop: 0,
        wind_cdir_full: "doğu",
        slp: 1009.2,
        moon_phase_lunation: 0.97,
        valid_date: "2022-07-27",
        app_max_temp: 30.3,
        vis: 24.128,
        dewpt: 7.4,
        snow: 0,
        uv: 9.8,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 89,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 18.3,
        max_temp: 32.2,
        moonset_ts: 1658943417,
        datetime: "2022-07-27",
        temp: 24.4,
        min_temp: 17.1,
        clouds_mid: 0,
        clouds_low: 0,
      },
      {
        moonrise_ts: 1658974078,
        wind_cdir: "D",
        rh: 29,
        pres: 977.2,
        high_temp: 38.2,
        sunset_ts: 1659028638,
        ozone: 296.6,
        moon_phase: 0.0118219,
        wind_gust_spd: 4.2,
        snow_depth: 0,
        clouds: 0,
        ts: 1658955660,
        sunrise_ts: 1658976856,
        app_min_temp: 17.2,
        wind_spd: 3,
        pop: 0,
        wind_cdir_full: "doğu",
        slp: 1008,
        moon_phase_lunation: 0.01,
        valid_date: "2022-07-28",
        app_max_temp: 35.8,
        vis: 24.128,
        dewpt: 6.8,
        snow: 0,
        uv: 9.7,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 86,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 18.7,
        max_temp: 38.2,
        moonset_ts: 1659031797,
        datetime: "2022-07-28",
        temp: 27,
        min_temp: 18.3,
        clouds_mid: 0,
        clouds_low: 0,
      },
      {
        moonrise_ts: 1659064129,
        wind_cdir: "GGD",
        rh: 52,
        pres: 986.6,
        high_temp: 36.4,
        sunset_ts: 1659114979,
        ozone: 296.6,
        moon_phase: 0.0412557,
        wind_gust_spd: 2.6,
        snow_depth: 0,
        clouds: 0,
        ts: 1659042060,
        sunrise_ts: 1659063310,
        app_min_temp: 18.8,
        wind_spd: 2.5,
        pop: 0,
        wind_cdir_full: "güney-güneydoğu",
        slp: 1009.4,
        moon_phase_lunation: 0.04,
        valid_date: "2022-07-29",
        app_max_temp: 36.1,
        vis: 24.128,
        dewpt: 14.8,
        snow: 0,
        uv: 9.7,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 155,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 19.1,
        max_temp: 36.4,
        moonset_ts: 1659119896,
        datetime: "2022-07-29",
        temp: 26.7,
        min_temp: 18.7,
        clouds_mid: 0,
        clouds_low: 0,
      },
      {
        moonrise_ts: 1659154279,
        wind_cdir: "D",
        rh: 54,
        pres: 986.9,
        high_temp: 36.7,
        sunset_ts: 1659201317,
        ozone: 292.8,
        moon_phase: 0.089358,
        wind_gust_spd: 3.5,
        snow_depth: 0,
        clouds: 1,
        ts: 1659128460,
        sunrise_ts: 1659149765,
        app_min_temp: 19.3,
        wind_spd: 3.1,
        pop: 0,
        wind_cdir_full: "doğu",
        slp: 1009.6,
        moon_phase_lunation: 0.08,
        valid_date: "2022-07-30",
        app_max_temp: 35,
        vis: 24.128,
        dewpt: 14.7,
        snow: 0,
        uv: 9.9,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 89,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 19.4,
        max_temp: 36.7,
        moonset_ts: 1659207798,
        datetime: "2022-07-30",
        temp: 26.9,
        min_temp: 19,
        clouds_mid: 1,
        clouds_low: 0,
      },
      {
        moonrise_ts: 1659244451,
        wind_cdir: "KD",
        rh: 49,
        pres: 984.8,
        high_temp: 36.5,
        sunset_ts: 1659287655,
        ozone: 288.3,
        moon_phase: 0.154895,
        wind_gust_spd: 3.4,
        snow_depth: 0,
        clouds: 0,
        ts: 1659214860,
        sunrise_ts: 1659236220,
        app_min_temp: 19.3,
        wind_spd: 3.4,
        pop: 0,
        wind_cdir_full: "kuzeydoğu",
        slp: 1007.4,
        moon_phase_lunation: 0.11,
        valid_date: "2022-07-31",
        app_max_temp: 35.2,
        vis: 24.128,
        dewpt: 14.2,
        snow: 0,
        uv: 9.9,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 50,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 19.8,
        max_temp: 36.5,
        moonset_ts: 1659295583,
        datetime: "2022-07-31",
        temp: 27.2,
        min_temp: 19.4,
        clouds_mid: 0,
        clouds_low: 0,
      },
      {
        moonrise_ts: 1659334617,
        wind_cdir: "DGD",
        rh: 47,
        pres: 983.6,
        high_temp: 37.5,
        sunset_ts: 1659373991,
        ozone: 295.7,
        moon_phase: 0.236164,
        wind_gust_spd: 3.6,
        snow_depth: 0,
        clouds: 0,
        ts: 1659301260,
        sunrise_ts: 1659322676,
        app_min_temp: 19.8,
        wind_spd: 3.3,
        pop: 0,
        wind_cdir_full: "doğu-güneydoğu",
        slp: 1006,
        moon_phase_lunation: 0.14,
        valid_date: "2022-08-01",
        app_max_temp: 36.2,
        vis: 24.128,
        dewpt: 13.9,
        snow: 0,
        uv: 9.8,
        weather: {
          icon: "c01d",
          code: 800,
          description: "Açık gökyüzü",
        },
        wind_dir: 120,
        max_dhi: null,
        clouds_hi: 0,
        precip: 0,
        low_temp: 20.8,
        max_temp: 37.5,
        moonset_ts: 1659383327,
        datetime: "2022-08-01",
        temp: 27.8,
        min_temp: 19.8,
        clouds_mid: 0,
        clouds_low: 0,
      },
    ];
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=40934578c34a4c46a60dbd10a191fcb7&city=${city}&days=8&lang=tr`
      )
      .then((d) => setWeather(d.data));
  }, [city]);
  if (weather.length !== 0) {
    weatherList = weather.data;
  }
  return (
    <div>
      <hr />

      <div className="container">
        <div className="row">
          {weather.length !== 0 && <h3>{weather.city_name}</h3>}
          <div className="card-group text-center">
            {weather.length !== 0 &&
              weatherList.map((e, k) => {
                switch (e.weather.code) {
                  case 501 || 500 || 502 || 511 || 520 || 521 || 522:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/f01d.png";
                    break;
                  case 621 || 622 || 601 || 602 || 610:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/s02d.png";
                    break;
                  case 741 || 700 || 711 || 721 || 731 || 751:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/a05d.png";
                    break;
                  case 800:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/c01d.png";
                    break;
                  case 801:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/c02d.png";
                    break;
                  case 803:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/c03d.png";
                    break;
                  case 804:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/c04d.png";
                    break;
                  case 900:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/u00d.png";
                    break;
                  default:
                    weatherimg =
                      "https://www.weatherbit.io/static/img/icons/c02d.png";
                    break;
                }

                if (k === 0) {
                  backgroundClr = "card bg-danger";
                  textClr = "text-light";
                } else {
                  backgroundClr = "card";
                  textClr = "text-muted";
                }
                return (
                  <div key={k} className={backgroundClr}>
                    <h5 className="card-header">
                      {getDayName(e.valid_date, "en-US")}
                    </h5>
                    <img src={weatherimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        {e.max_temp}°{" "}
                        <span className={textClr}>{e.min_temp}°</span>
                      </h5>
                      <h6 className={textClr}>{e.weather.description}</h6>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Weather);
