import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import multer from 'multer';
import path from 'path';

const storageOd = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/ods'));
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now() + '.pdf');
    cb(null, `od-${req.user.id}-${Date.now()}.pdf`);
  },
});

const storageReport = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/reports'));
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now() + '.pdf');
    cb(null, `report-${req.user.id}-${Date.now()}.pdf`);
  },
});

const uploadOd = multer({
  limits: {
    fileSize: 1000000,
  },
  storage: storageOd,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb(
        new ApiError(httpStatus.BAD_REQUEST, 'Please upload a pdf file.')
      );
    }
    cb(null, true);
  },
});

const uploadReport = multer({
  limits: {
    fileSize: 1000000,
  },
  storage: storageReport,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb(
        new ApiError(httpStatus.BAD_REQUEST, 'Please upload a pdf file.')
      );
    }
    cb(null, true);
  },
});

const handleOd = uploadOd.single('od');
const handleReport = uploadReport.single('report');

export { handleOd, handleReport };
