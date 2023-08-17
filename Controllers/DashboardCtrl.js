import HomeLoanModel from "../Models/HomeloanModel.js";
import BusinessLoanModel from "../Models/BusinessloanModel.js";
import PersonalLoanModel from "../Models/PersonalLoanModel.js";
import MortgageLoanModel from "../Models/MortgageLoanModel.js";
import GoldLoanModel from "../Models/GoldLoanModel.js";
import CreditCardModel from "../Models/CreditCardModel.js";
import CarLoanModel from "../Models/CarLoanModel.js";
import GSTLoanModel from "../Models/GSTRegistrationModel.js";
import NewCorrectionPanApplicationModel from "../Models/NewCorrectionPanApplication.js";
import PassportModel from "../Models/PassportModel.js";
import ShopActModel from "../Models/ShopActModel.js";
import UdyamCertificateModel from "../Models/UdyamCertificationModel.js";
import FoodLisenceModel from "../Models/FoodLisenceModel.js";
import { employeeModel } from "../Models/EmpolyeeModel.js";

export const dashboardForTotolNumberofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofDocumentForAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({}).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find(
      {}
    ).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find(
      {}
    ).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find(
      {}
    ).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({}).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find(
      {}
    ).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({}).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({}).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find(
      {}
    ).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({}).countDocuments();
    const savedShopActDocument = await ShopActModel.find({}).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find(
      {}
    ).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find(
      {}
    ).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofSuccessDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isSuccess: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isSuccess: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
   
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofFailedDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isFailed: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isFailed: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isFailed: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isFailed: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isFailed: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isFailed: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofPendingDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isPending: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isPending: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isPending: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isPending: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isPending: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isPending: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
   
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberSuccessofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isSuccess: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberFailedofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isFailed: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberPendingofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isPending: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const totalLeadForParticularEmployee = async (req, res) => {
  try {
    const { currentUserId } = req.query;

    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }

    if (!currentUserId) {
      return res
        .status(401)
        .json({ status: false, message: "No Id is present to query" });
    }

    const homeLoanLeadCount = await HomeLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const businessLoanLeadCount = await BusinessLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const personalLoanLeadCount = await PersonalLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const mortgageLoanLeadCount = await MortgageLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const goldLoanLeadCount = await GoldLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const creditLoanLeadCount = await CreditCardModel.find({
      employee: currentUserId,
    }).countDocuments();
    const carLoanLeadCount = await CarLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const gstLoanLeadCount = await GSTLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const passportLoanLeadCount = await PassportModel.find({
      employee: currentUserId,
    }).countDocuments();
    const newCorrectionPanApplicationCount =
      await NewCorrectionPanApplicationModel.find({
        employee: currentUserId,
      }).countDocuments();
    const shopActLeadCount = await ShopActModel.find({
      employee: currentUserId,
    }).countDocuments();
    const udyamCertificateLoanLeadCount = await UdyamCertificateModel.find({
      employee: currentUserId,
    }).countDocuments();
    const foodLisenceLoanLeadCount = await FoodLisenceModel.find({
      employee: currentUserId,
    }).countDocuments();

    return res.status(202).json({
      status: true,
      message: "successfully fetched lead count for particular employee",
      homeLoanLeadCount,
      businessLoanLeadCount,
      personalLoanLeadCount,
      mortgageLoanLeadCount,
      creditLoanLeadCount,
      goldLoanLeadCount,
      carLoanLeadCount,
      gstLoanLeadCount,
      passportLoanLeadCount,
      newCorrectionPanApplicationCount,
      shopActLeadCount,
      udyamCertificateLoanLeadCount,
      foodLisenceLoanLeadCount,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const totalMISreport = async (req, res) => {
  try {
    // For All Lead 
    const homeLoanLeadCount = await HomeLoanModel.find({}).countDocuments();
    const businessLoanLeadCount = await BusinessLoanModel.find({}).countDocuments();
    const personalLoanLeadCount = await PersonalLoanModel.find({}).countDocuments();
    const mortgageLoanLeadCount = await MortgageLoanModel.find({}).countDocuments();
    const goldLoanLeadCount = await GoldLoanModel.find({}).countDocuments();
    const creditLoanLeadCount = await CreditCardModel.find({}).countDocuments();
    const carLoanLeadCount = await CarLoanModel.find({}).countDocuments();
    const gstLoanLeadCount = await GSTLoanModel.find({}).countDocuments();
    const passportLoanLeadCount = await PassportModel.find({}).countDocuments();
    const newCorrectionPanApplicationCount =
      await NewCorrectionPanApplicationModel.find({
      }).countDocuments();
    const shopActLeadCount = await ShopActModel.find({}).countDocuments();
    const udyamCertificateLoanLeadCount = await UdyamCertificateModel.find({}).countDocuments();
    const foodLisenceLoanLeadCount = await FoodLisenceModel.find({}).countDocuments();


    let hLLA = await HomeLoanModel.find({});
    let homeLoanLeadAmout = 0n;
    for (let index = 0; index < hLLA.length; index++) {
      if (typeof hLLA[index].LoanAmount !== "undefined") {
        homeLoanLeadAmout += BigInt(hLLA[index].LoanAmount);
      }
    }
    let BLLA = await BusinessLoanModel.find({});
    let businessLoanLeadAmout = 0n;
    for (let index = 0; index < BLLA.length; index++) {
      if (typeof BLLA[index].LoanAmount !== "undefined") {
        businessLoanLeadAmout += BigInt(BLLA[index].LoanAmount);
      }
    }

    let PLLA = await PersonalLoanModel.find({});
    let personalLoanLeadAmout = 0n;
    for (let index = 0; index < PLLA.length; index++) {
      if (typeof PLLA[index].LoanAmount !== "undefined") {
        personalLoanLeadAmout += BigInt(PLLA[index].LoanAmount);
      }
    }

    let MLLA = await MortgageLoanModel.find({});
    let mortgageLoanLeadAmout = 0n;
    for (let index = 0; index < MLLA.length; index++) {
      if (typeof MLLA[index].LoanAmount !== "undefined") {
        mortgageLoanLeadAmout += BigInt(MLLA[index].LoanAmount);
      }
    }

    let GLLA = await GoldLoanModel.find({});
    let goldLoanLeadAmout = 0n;
    for (let index = 0; index < GLLA.length; index++) {
      if (typeof GLLA[index].LoanAmount !== "undefined") {
        goldLoanLeadAmout += BigInt(GLLA[index].LoanAmount);
      }
    }

    let CLLA = await CreditCardModel.find({});
    let creditLoanLeadAmout = 0n;
    for (let index = 0; index < CLLA.length; index++) {
      if (typeof CLLA[index]?.LoanAmount !== "undefined") {
        creditLoanLeadAmout += BigInt(CLLA[index].LoanAmount);
      }
    }

    let CLA = await CarLoanModel.find({});
    let carLoanLeadAmout = 0n;
    for (let index = 0; index < CLA.length; index++) {
      if (typeof CLA[index].LoanAmount !== "undefined") {
        carLoanLeadAmout += BigInt(CLA[index].LoanAmount);
      }
    }
    let GLA = await GSTLoanModel.find({});
    let gstLoanLeadAmout = 0n;
    for (let index = 0; index < GLA.length; index++) {
      if (typeof GLA[index]?.LoanAmount !== "undefined") {
        gstLoanLeadAmout += BigInt(GLA[index].LoanAmount);
      }
    }

    let PLA = await PassportModel.find({});
    let passportLoanLeadAmout = 0n;
    for (let index = 0; index < PLLA.length; index++) {
      if (typeof PLA[index]?.LoanAmount !== "undefined") {
        passportLoanLeadAmout += BigInt(PLA[index].LoanAmount);
      }
    }
    let NCPA = await NewCorrectionPanApplicationModel.find({});
    let newCorrectionPanApplication = 0n;
    for (let index = 0; index < NCPA.length; index++) {
      if (typeof NCPA[index]?.LoanAmount !== "undefined") {
        newCorrectionPanApplication += BigInt(NCPA[index].LoanAmount);
      }
    }

    let SALA = await ShopActModel.find({});
    let shopActLeadAmout = 0n;
    for (let index = 0; index < SALA.length; index++) {
      if (typeof SALA[index]?.LoanAmount !== "undefined") {
        shopActLeadAmout += BigInt(SALA[index].LoanAmount);
      }
    }
    let UCLA = await UdyamCertificateModel.find({});
    let udyamCertificateLoanLeadAmout = 0n;
    for (let index = 0; index < UCLA.length; index++) {
      if (typeof UCLA[index]?.LoanAmount !== "undefined") {
        udyamCertificateLoanLeadAmout += BigInt(UCLA[index].LoanAmount);
      }
    }
    let FLLA = await FoodLisenceModel.find({});
    let foodLisenceLoanLeadAmout = 0n;
    for (let index = 0; index < FLLA.length; index++) {
      if (typeof FLLA[index]?.LoanAmount !== "undefined") {
        foodLisenceLoanLeadAmout += BigInt(FLLA[index].LoanAmount);
      }
    }

    return res.status(202).json({
      status: true,
      message: "successfully fetched lead count for particular employee",
      data: {
        homeLoan: { homeLoanLeadCount, homeLoanLeadAmout: homeLoanLeadAmout.toString() },
        businessLoan: { businessLoanLeadCount, businessLoanLeadAmout: businessLoanLeadAmout.toString() },
        personalLoan: { personalLoanLeadCount, personalLoanLeadAmout: personalLoanLeadAmout.toString() },
        mortgageLoan: { mortgageLoanLeadCount, mortgageLoanLeadAmout: mortgageLoanLeadAmout.toString() },
        creditLoan: { creditLoanLeadCount, creditLoanLeadAmout: creditLoanLeadAmout.toString() },
        goldLoan: { goldLoanLeadCount, goldLoanLeadAmout: goldLoanLeadAmout.toString() },
        carLoan: { carLoanLeadCount, carLoanLeadAmout: carLoanLeadAmout.toString() },
        gstLoan: { gstLoanLeadCount, gstLoanLeadAmout: gstLoanLeadAmout.toString() },
        passportLoan: { passportLoanLeadCount, passportLoanLeadAmout: passportLoanLeadAmout.toString() },
        newCorrectionPanApplica: {
          newCorrectionPanApplicationCount,
          newCorrectionPanApplication: newCorrectionPanApplication.toString(),
        },
        shopAct: { shopActLeadCount, shopActLeadAmout: shopActLeadAmout.toString() },
        udyamCertificateLoan: {
          udyamCertificateLoanLeadCount,
          udyamCertificateLoanLeadAmout: udyamCertificateLoanLeadAmout.toString(),
        },
        foodLisenceLoan: { foodLisenceLoanLeadCount, foodLisenceLoanLeadAmout: foodLisenceLoanLeadAmout.toString() },
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};




export const totalEmployeeAndLead = async (req, res) => {
  try {
    let arr =[]
    const { FromDate,Todate } = req.query;
   
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }

   
    const Fromdatee = new Date(FromDate);
   
    const Todatee = new Date(Todate);

 
      const homeLoanLeadCount = await HomeLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const businessLoanLeadCount = await BusinessLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
        }).populate(["service", "client", "employee"]);
      const personalLoanLeadCount = await PersonalLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
        }).populate(["service", "client", "employee"]);
      const mortgageLoanLeadCount = await MortgageLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
        }).populate(["service", "client", "employee"]);
      const goldLoanLeadCount = await GoldLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
        }).populate(["service", "client", "employee"]);
      const creditLoanLeadCount = await CreditCardModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
        }).populate(["service", "client", "employee"]);
      const carLoanLeadCount = await CarLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const gstLoanLeadCount = await GSTLoanModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const passportLoanLeadCount = await PassportModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const newCorrectionPanApplicationCount =
        await NewCorrectionPanApplicationModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const shopActLeadCount = await ShopActModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const udyamCertificateLoanLeadCount = await UdyamCertificateModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);
      const foodLisenceLoanLeadCount = await FoodLisenceModel.find({
        createdAt:{
          $gte : Fromdatee , 
          $lte : Todatee
        }
      }).populate(["service", "client", "employee"]);

      const newobj = {
        homeLoanLeadCount: homeLoanLeadCount,
        businessLoanLeadCount: businessLoanLeadCount,
        personalLoanLeadCount: personalLoanLeadCount,
        mortgageLoanLeadCount: mortgageLoanLeadCount,
        goldLoanLeadCount: goldLoanLeadCount,
        creditLoanLeadCount: creditLoanLeadCount,
        passportLoanLeadCount: passportLoanLeadCount,
        carLoanLeadCount: carLoanLeadCount,
        gstLoanLeadCount: gstLoanLeadCount,
        udyamCertificateLoanLeadCount: udyamCertificateLoanLeadCount,
        shopActLeadCount: shopActLeadCount,
        foodLisenceLoanLeadCount: foodLisenceLoanLeadCount,
        newCorrectionPanApplicationCount: newCorrectionPanApplicationCount,
      };

      if(homeLoanLeadCount.length>0){
        arr=[...arr,...homeLoanLeadCount]
      }
      if( businessLoanLeadCount.length>0){
        arr=[...arr,... businessLoanLeadCount]
      }
      if( personalLoanLeadCount.length>0){
        arr=[...arr,... personalLoanLeadCount]
      }
      if(mortgageLoanLeadCount.length>0){
        arr=[...arr,...mortgageLoanLeadCount]
      }
      if(goldLoanLeadCount.length>0){
        arr=[...arr,...goldLoanLeadCount]
      }
      if(creditLoanLeadCount.length>0){
        arr=[...arr,...creditLoanLeadCount]
      }
      if(passportLoanLeadCount.length>0){
        arr=[...arr,...passportLoanLeadCount]
      }
      if(carLoanLeadCount.length>0){
        arr=[...arr,...carLoanLeadCount]
      }
      if(gstLoanLeadCount.length>0){
        arr=[...arr,...gstLoanLeadCount]
      }
      if(udyamCertificateLoanLeadCount.length>0){
        arr=[...arr,...udyamCertificateLoanLeadCount]
      }
      if(shopActLeadCount.length>0){
        arr=[...arr,...shopActLeadCount]
      }
      if(foodLisenceLoanLeadCount.length>0){ 
        arr=[...arr,...foodLisenceLoanLeadCount]
      }
      if(newCorrectionPanApplicationCount.length>0){
        arr=[...arr,...newCorrectionPanApplicationCount]
      }
    return res.status(202).json({
      status: true,
      message: "sucessfully fetched mis report",
      response: arr,
       
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofSuccessFailedandPendingDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }

    // ___Count Success API
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isSuccess: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isSuccess: true,
    }).countDocuments();

    // _Count Failed Lead_
    const savedHomeLoanDocumentFail = await HomeLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedBusiessLoanDocumentFail = await BusinessLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedPersonalLoanDocumentFail = await PersonalLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedMortgageLoanDocumentFail = await MortgageLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedGoldLoanDocumentFail = await GoldLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedCreditCardDocumentFail = await CreditCardModel.find({
      isFailed: true,
    }).countDocuments();
    const savedCarLoanDocumentFail = await CarLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedGSTLoanDocumentFail = await GSTLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedPassportLoanDocumentFail = await PassportModel.find({
      isFailed: true,
    }).countDocuments();
    const savedNewCorrectionPanDocumentFail =
      await NewCorrectionPanApplicationModel.find({
        isFailed: true,
      }).countDocuments();
    const savedShopActDocumentFail = await ShopActModel.find({
      isFailed: true,
    }).countDocuments();
    const savedUdyamCertificateDocumentFail = await UdyamCertificateModel.find({
      isFailed: true,
    }).countDocuments();
    const savedFoodLisenceDocumentFail = await FoodLisenceModel.find({
      isFailed: true,
    }).countDocuments();

    // Pending
    
    const savedHomeLoanDocumentPending = await HomeLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedBusiessLoanDocumentPending = await BusinessLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedPersonalLoanDocumentPending = await PersonalLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedMortgageLoanDocumentPending = await MortgageLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedGoldLoanDocumentPending = await GoldLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedCreditCardDocumentPending = await CreditCardModel.find({
      isPending: true,
    }).countDocuments();
    const savedCarLoanDocumentPending = await CarLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedGSTLoanDocumentPending = await GSTLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedPassportLoanDocumentPending = await PassportModel.find({
      isPending: true,
    }).countDocuments();
    const savedNewCorrectionPanDocumentPending =
      await NewCorrectionPanApplicationModel.find({
        isPending: true,
      }).countDocuments();
    const savedShopActDocumentPending = await ShopActModel.find({
      isPending: true,
    }).countDocuments();
    const savedUdyamCertificateDocumentPending = await UdyamCertificateModel.find({
      isPending: true,
    }).countDocuments();
    const savedFoodLisenceDocumentPending = await FoodLisenceModel.find({
      isPending: true,
    }).countDocuments();



    //_Count Success Lead_
    const Success = savedBusiessLoanDocument + savedCarLoanDocument + savedCreditCardDocument + savedFoodLisenceDocument + savedGSTLoanDocument + savedGoldLoanDocument + savedHomeLoanDocument + savedMortgageLoanDocument + savedNewCorrectionPanDocument + savedPassportLoanDocument + savedPersonalLoanDocument + savedShopActDocument + savedUdyamCertificateDocument;

    // Total Count of Failed Lead
    const Failed = savedBusiessLoanDocumentFail + savedCarLoanDocumentFail + savedCreditCardDocumentFail + savedFoodLisenceDocumentFail + savedGSTLoanDocumentFail + savedGoldLoanDocumentFail + savedHomeLoanDocumentFail + savedMortgageLoanDocumentFail + savedNewCorrectionPanDocumentFail + savedPassportLoanDocumentFail + savedPersonalLoanDocumentFail + savedShopActDocumentFail + savedUdyamCertificateDocumentFail;

   

    const Pending = savedBusiessLoanDocumentPending + savedCarLoanDocumentPending + savedCreditCardDocumentPending + savedFoodLisenceDocumentPending + savedGSTLoanDocumentPending + savedGoldLoanDocumentPending + savedHomeLoanDocumentPending + savedMortgageLoanDocumentPending + savedNewCorrectionPanDocumentPending + savedPassportLoanDocumentPending + savedPersonalLoanDocumentPending + savedShopActDocumentPending + savedUdyamCertificateDocument;

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        Success,
        Failed,
        Pending
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberSuccesFailedandPendingsofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }

   
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isSuccess: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();

    // Failed API calling

    
    const savedHomeLoanDocumentFailed = await HomeLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedBusiessLoanDocumentFailed = await BusinessLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedPersonalLoanDocumentFailed = await PersonalLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedMortgageLoanDocumentFailed = await MortgageLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedGoldLoanDocumentFailed = await GoldLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedCreditCardDocumentFailed = await CreditCardModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedCarLoanDocumentFailed = await CarLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedGSTLoanDocumentFailed = await GSTLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedPassportLoanDocumentFailed = await PassportModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedNewCorrectionPanDocumentFailed =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isFailed: true,
      }).countDocuments();
    const savedShopActDocumentFailed = await ShopActModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedUdyamCertificateDocumentFailed = await UdyamCertificateModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedFoodLisenceDocumentFailed = await FoodLisenceModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();

    // Pending 
    
    const savedHomeLoanDocumentPending = await HomeLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedBusiessLoanDocumentPending = await BusinessLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedPersonalLoanDocumentPending = await PersonalLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedMortgageLoanDocumentPending = await MortgageLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedGoldLoanDocumentPending = await GoldLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedCreditCardDocumentPending = await CreditCardModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedCarLoanDocumentPending = await CarLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedGSTLoanDocumentPending = await GSTLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedPassportLoanDocumentPending = await PassportModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedNewCorrectionPanDocumentPending =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isPending: true,
      }).countDocuments();
    const savedShopActDocumentPending = await ShopActModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedUdyamCertificateDocumentPending = await UdyamCertificateModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedFoodLisenceDocumentPending = await FoodLisenceModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();

 

    // Total Count of Succes 
    const Success = savedBusiessLoanDocument + savedCarLoanDocument + savedCreditCardDocument + savedFoodLisenceDocument + savedGSTLoanDocument + savedGoldLoanDocument + savedHomeLoanDocument + savedMortgageLoanDocument + savedNewCorrectionPanDocument + savedPassportLoanDocument + savedPersonalLoanDocument + savedShopActDocument + savedUdyamCertificateDocument

 
    const Failed = savedBusiessLoanDocumentFailed + savedCarLoanDocumentFailed + savedCreditCardDocumentFailed + savedFoodLisenceDocumentFailed + savedGSTLoanDocumentFailed + savedGoldLoanDocumentFailed + savedHomeLoanDocumentFailed + savedMortgageLoanDocumentFailed + savedNewCorrectionPanDocumentFailed + savedPassportLoanDocumentFailed + savedPersonalLoanDocumentFailed + savedShopActDocumentFailed + savedUdyamCertificateDocumentFailed;

    
    const Pending = savedBusiessLoanDocumentPending + savedCarLoanDocumentPending + savedCreditCardDocumentPending + savedFoodLisenceDocumentPending + savedGSTLoanDocumentPending + savedGoldLoanDocumentPending + savedHomeLoanDocumentPending + savedMortgageLoanDocumentPending + savedNewCorrectionPanDocumentPending + savedPassportLoanDocumentPending + savedPersonalLoanDocumentPending + savedShopActDocumentPending + savedUdyamCertificateDocumentPending;

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        Success,
        Failed,
        Pending
      },
    });
  } catch (error) {
   
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
 }
};