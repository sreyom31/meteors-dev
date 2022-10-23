export enum tokenTypes {
  ACCESS = 'access',
  REFRESH = 'refresh',
  RESET_PASSWORD = 'resetPassword',
  VERIFY_EMAIL = 'verifyEmail',
}

export const userDesignations = {
  admin: [
    'getUsers',
    'manageUsers',
    'getEvents',
    'manageEvents',
    'getRegistrations',
    'manageRegistrations',
  ],
  student: ['getUsers', 'manageUsers', 'getEvents', 'getRegistrations'],
  faculty: ['getUsers', 'manageUsers', 'getEvents', 'getRegistrations'],
  club: [
    'getUsers',
    'manageUsers',
    'getEvents',
    'manageEvents',
    'getRegistrations',
    'manageRegistrations',
  ],
};

export enum role {
  Admin = 'admin',
  Student = 'student',
  Faculty = 'faculty',
  Club = 'club',
}

export const roles = Object.keys(userDesignations);
export const roleRights = new Map(Object.entries(userDesignations));
