import React from 'react'

import { useStyles } from './article.admin.styles'
import FormArticle from '../../../components/form-article/form-article.component'
import TableArticle from '../../../components/table-article/table-article.component'
import Container from '@material-ui/core/Container';

const ArticleAdmin = () => {
    const classes = useStyles()
    return (
        <Container>
            <h1>ArticleAdmin</h1>
            <FormArticle/>
            {/* <TableArticle/> */}
            
        </Container>
    )
}

export default ArticleAdmin
