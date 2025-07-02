import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import User from "./User";

const resolver = classValidatorResolver(User);

export default function UserForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>({
    resolver,
    defaultValues: new User(),
  });

  const onSubmit = (data: User) => {
    console.log("✅ 제출 데이터:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이름:</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      {/* <div>
        <label>나이:</label>
        <input type="number" {...register("age")} />
        <p>{errors.age?.message}</p>
      </div> */}

      <div>
        <label>학교 유형:</label>
        <select {...register("schoolType")}>
          <option value="">선택</option>
          <option value="HighSchool">고등학교</option>
          <option value="MiddleSchool">중학교</option>
          <option value="ElementarySchool">초등학교</option>
        </select>
        <p>{errors.schoolType?.message}</p>
      </div>

      <button type="submit">제출</button>
      <DevTool control={control} />
    </form>
  );
}
