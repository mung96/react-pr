import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const res = () => {
    return { onChange: () => console.log("change") };
  };
  console.log("렌더링");

  watch("example"); //watch를 달면 제어로 변경됨
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 이런 형태로 넘기는게 가능하구나 */}
      <input {...res()} />
      <input {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <p>필수값입니다.</p>}

      <input type="submit" />
    </form>
  );
}
