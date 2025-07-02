import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  Max,
  IsEnum,
} from "class-validator";

enum SchoolType {
  HighSchool = "HighSchool",
  MiddleSchool = "MiddleSchool",
  ElementarySchool = "ElementarySchool",
}

export default class User {
  @IsNotEmpty({ message: "이름은 필수입니다." })
  @IsString({ message: "이름은 문자열이어야 합니다." })
  name!: string;

  //   @IsNotEmpty({ message: "나이는 필수입니다." })
  //   @IsNumber({}, { message: "나이는 숫자여야 합니다." })
  //   @Min(1, { message: "나이는 1세 이상이어야 합니다." })
  //   @Max(120, { message: "나이는 120세 이하여야 합니다." })
  //   age: number | null;

  @IsNotEmpty({ message: "학교 유형은 필수입니다." })
  @IsEnum(SchoolType, { message: "유효한 학교 유형을 선택해주세요." })
  schoolType!: SchoolType | null;

  constructor() {
    this.name = "";
    // this.age = null;
    this.schoolType = null;
  }
}
