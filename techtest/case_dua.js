const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];
  
function countTotalComments(comments){
    let totalComments = 0;
  
    for (const comment of comments) {
        totalComments++; // Menambahkan komentar utama
  
        if (comment.replies) {
            totalComments += countTotalComments(comment.replies); // Menghitung balasan komentar
        }
    }
  
    return totalComments;
}
  
const totalComments = countTotalComments(comments);
console.log('Total komentar:', totalComments); // Output: Total komentar: 7
