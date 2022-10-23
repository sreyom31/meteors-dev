export enum tokenTypes {
  ACCESS = 'access',
  REFRESH = 'refresh',
  RESET_PASSWORD = 'resetPassword',
  VERIFY_EMAIL = 'verifyEmail',
}

export const userDesignations = {
  admin: ['getUsers'],
  student: ['getUsers'],
  faculty: ['getUsers'],
  club: ['getUsers'],
};

export enum role {
  Admin = 'admin',
  Student = 'student',
  Faculty = 'faculty',
  Club = 'club',
}

export const roles = Object.keys(userDesignations);
export const roleRights = new Map(Object.entries(userDesignations));
