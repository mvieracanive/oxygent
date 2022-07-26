import { Schema } from "express-validator";
import validator from "validator";
import { Comment } from "../db/models/comment";

export const DuplicatedCommentSchema: Schema = {
  comment: {
    custom: {
      options: async (value, { req, location, path }) => {
        try{
          const duplicated = await Comment.findOne({
            where: {
              comment: req.body.comment,
              userId: req.body.userId,
              flightId: req.body.flightId
            }
          })
          if (duplicated){
            return Promise.reject('Comment already placed')
          }
          return true
        }
        catch(e){
          return Promise.reject('Error during validation of comment duplication');
        }
      },
    }
  }  
}

export const ReqCommentSchema: Schema = {
    comment: {
      in: ['body'],
      isString: {errorMessage: "Comment must be a string"},
      exists: {errorMessage: "Comment is a mandatory field"}
    },
    userId: {
      in: ['body'],
      isInt: {errorMessage: "User ID must be an integer"},
      exists: {errorMessage: "User ID is a mandatory field"}
    },
    flightId: {
      in: ['body'],
      isInt: {errorMessage: "Flight ID must be an integer"},
      exists: {errorMessage: "Flight ID is a mandatory field"}
    },
    tags: {
      isArray: {errorMessage: "Tags must be an array"},
      optional: true,
      in: ['body'],
      custom: {
        options: (value) => {
          return value.every(it => validator.isAlphanumeric(it));
        },
        errorMessage: "Each tag must be a string"
      },
      customSanitizer: {
        options: value => {
          return value.join(', ');
        },
      }
    }
  }

  export const ResCommentSchema: Schema = {
    tags: {
      customSanitizer: {
        options: value => {
          return value.split(', ');
        }
      }
    }
  }