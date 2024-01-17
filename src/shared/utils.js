import { conSoMetaData, systemMetaData } from "@/const/const";
import dayjs from "dayjs";
import _ from "lodash";

// path là đường dẫn url
export const getSystemMetaData = (path) => {
  const currentMetaData =
    systemMetaData.metaUrl[path] || systemMetaData.default;
  return currentMetaData;
};

export const formatDate = (date, formatType = "DD/MM/YYYY") => {
  return dayjs(date).format(formatType);
};

export const getDayjsObj = (date, format = "DD/MM/YYYY") => {
  return dayjs(date, format);
};

export const dayjsObjToString = (dayjsDate, format = "DD/MM/YYYY") => {
  const date = dayjsDate.format(format);
  return date;
};

export const isDayjsDateValid = (dateStr, format = "DD/MM/YYYY") => {
  const parsedDate = dayjs(dateStr, format);
  return parsedDate.isValid();
};

export const findConSoByType = (conSoType) => {
  const type = parseInt(conSoType);
  const values = _.values(conSoMetaData);
  const foundConSo = _.find(values, { type });

  return foundConSo || null;
};

export const findConSoByEnName = (enName) => {
  const values = _.values(conSoMetaData);
  const foundConSo = _.find(values, { enName });

  return foundConSo || null;
};

export const getLoggedUserData = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return {};
    }
  }
  return {};
};

/**
 * Dinh dang number: 100.300,345
 * @param {number} iNumber So can dinh dang
 * @returns
 */
export const formatNumber = (iNumber) => {
  return new Intl.NumberFormat("de-DE").format(parseFloat(iNumber));
};
