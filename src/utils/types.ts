export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  name: string;
  username: string;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProject {
  name: string;
}

export interface IEmployee {
  name: string;
  jobTitle: JobTitle;
  salary: number;
  startDate: Date;
  endDate?: Date;
  workContract: string;
  avatar: string;
  workHours: number;
  startTime: Date ;
  endTime: Date;
}

enum JobTitle {
  EDUCATION_SUPERVISOR = "EDUCATION_SUPERVISOR",
  HEAD_TEACHER = "HEAD_TEACHER",
  TEACHER = "TEACHER",
  DATA_ENTRY = "DATA_ENTRY",
  MEDIA = "MEDIA",
}
