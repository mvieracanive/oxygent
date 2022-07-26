const assert = require('assert')

const { commentService } = require('../dist/services/comment')

describe('Comment Service', function () {
    before(function () {        
        
    })
  
    after(function () {
        
    })

    describe("#CRUD", function() {
      const comment = {
        comment: "This is a test comment",
        userId: 45,
        flightId: 67,
      }
      let commentId

      it("Comment created", async function() {        
        const resultedComment = await commentService.create(comment)
        console.log("date cre", resultedComment.date)
        commentId = resultedComment.id
        assert.deepEqual(resultedComment, {
          ...resultedComment,
          ...comment
        })
      })

      it("Comment found", async function() {    
        const query = {
          where: {
            id: commentId
          },
          attributes: ['id', 'comment', 'userId', 'flightId']
        }    
        const resultedComments = await commentService.find(query)
        assert.equal(1, resultedComments.length)
        const resultedComment = resultedComments[0]
        assert.deepStrictEqual(resultedComments[0], {
          ...resultedComment,
          ...comment
        })
      })
    })
  });