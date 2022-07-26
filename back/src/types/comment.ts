interface CreateCommentDto {
    comment: string,
    date: Date,
    userId: number,
    flightId: number,
    tags?: string
}

interface UpdateCommentDto {
    comment?: string,
    date?: Date,
    userId?: number,
    flightId?: number,
    tags?: string
}