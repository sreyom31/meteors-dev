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
    'postRegistrations',
    'manageRegistrations',
    'getReports',
    'manageReports',
  ],
  student: [
    'getUsers',
    'manageUsers',
    'getEvents',
    'postRegistrations',
    'manageRegistrations',
    'getOdrequests',
  ],
  faculty: [
    'getUsers',
    'manageUsers',
    'getEvents',
    'postRegistrations',
    'manageRegistrations',
    'manageOdrequests',
    'getReports',
    'manageReports',
  ],
  club: [
    'getUsers',
    'manageUsers',
    'getEvents',
    'manageEvents',
    'getRegistrations',
    'getOdrequests',
    'getReports',
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
