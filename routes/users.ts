import {Request, Response} from "express";
var express = require('express');
var router = express.Router();
var validate = require('express-validation');
import {ModelAccount} from "../models/ModelAccount";
import {ACTION, PATH, accountRoles} from '../middlewares/authorisation/Accounts';
import {Logger} from "../utities/Logger";
import {VALIDATION_ACCOUNTS_DETAIL_ONE, VALIDATION_ACCOUNTS_UPDATE} from "../validations/accounts";
import {EntityAccount} from "../entities/EntityAccount";
var log = Logger.getNewLogger(__filename);
var mAccount = new ModelAccount();
router.post(PATH.DETAIL_ACCOUNT, validate(VALIDATION_ACCOUNTS_DETAIL_ONE), accountRoles.can(ACTION.VIEW_DETAIL), function (req: Request, res: Response) {
  var id = req.params.id;
  mAccount.getById(id)
      .then((user:EntityAccount) => {
        res.json({error:null,data:user});
      })
      .catch((error) => {
        res.json({error:error});
      });
});
router.post(PATH.UPDATE_ACCOUNT, validate(VALIDATION_ACCOUNTS_UPDATE), accountRoles.can(ACTION.UPDATE_ACCOUNT), function (req: Request, res: Response) {
  var userId = req.session.user.id;//It up to you
  mAccount.updateProperties(userId, req.body, userId)
      .then((result) => {
        res.json({error:null,data:result});
      })
      .catch((error) => {
        res.json({error:error});
      });
});
module.exports = router;
