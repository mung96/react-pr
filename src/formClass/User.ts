import { Type } from "class-transformer";
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  Max,
  IsEnum,
  ValidateIf,
  ValidateNested,
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

  @IsNotEmpty({ message: "학교 유형은 필수입니다." })
  @IsEnum(SchoolType, { message: "유효한 학교 유형을 선택해주세요." })
  schoolType!: SchoolType | null;

  //   school타입이 HighSchool일때 LevelInfo가 있어야함
  @ValidateIf((o) => o.schoolType === SchoolType.HighSchool)
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LevelInfo)
  levelInfo: LevelInfo | null;

  constructor() {
    this.name = "";
    this.schoolType = null;
    this.levelInfo = null;
  }
}

class LevelInfo {
  @IsNotEmpty({ message: "수학 점수는 필수입니다." })
  @IsNumber({}, { message: "수학 점수는 숫자여야 합니다." })
  @Min(0, { message: "수학 점수는 0점 이상이어야 합니다." })
  @Max(100, { message: "수학 점수는 100점 이하여야 합니다." })
  math: number | null;

  @IsNotEmpty({ message: "영어 점수는 필수입니다." })
  @IsNumber({}, { message: "영어 점수는 숫자여야 합니다." })
  @Min(0, { message: "영어 점수는 0점 이상이어야 합니다." })
  @Max(100, { message: "영어 점수는 100점 이하여야 합니다." })
  english: number | null;

  constructor() {
    this.math = null;
    this.english = null;
  }
}
