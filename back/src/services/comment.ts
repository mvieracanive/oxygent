import { Comment } from "../db/models/comment"

export class CommentService {
    async create(dto: CreateCommentDto){
        const comment = await Comment.create({...dto})
        return comment.toJSON()
    }

    async update(id: number, dto: UpdateCommentDto){
        const comment = await Comment.findOne({ where: {id}})
        await comment?.update(dto)
        comment?.save()
        return comment?.toJSON()
    }

    async delete(id: number){
        await Comment.destroy({
            where: { id }
        })
    }

    async find(query = {}){
        const { rows } = await Comment.findAndCountAll(query)
        return rows.map(it=>it.toJSON())
    }
}

export const commentService = new CommentService()