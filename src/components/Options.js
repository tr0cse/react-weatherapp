import { useEffect, memo } from "react";
import { useFormik } from "formik";
import { useFormContext } from "../context/FormContext";

function Options() {
  const { city, setCity } = useFormContext();

  const formik = useFormik({
    initialValues: {
      cities: city,
    },
  });

  useEffect(() => {
    if (formik.values.cities) {
      setCity(formik.values.cities);
    }
  }, [formik.values.cities]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <form onSubmit={formik.handleSubmit}>
            <select
              className="form-select form-select-sm"
              id="cities"
              name="cities"
              onChange={formik.handleChange}
            >
              <option value="Bursa">Bursa</option>
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="Aydın">Aydın</option>
              <option value="İzmir">İzmir</option>
              <option value="Antalya">Antalya</option>
              <option value="Konya">Konya</option>
              <option value="Adana">Adana</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Mersin">Mersin</option>
              <option value="Van">Van</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(Options);
