import React from "react";
import { IconBrandGithub } from '@tabler/icons';
import './PageFooter.scss'

export function PageFooter({style}) {
    return (
        <footer className='PageFooter' style={style}>
            <p className="PageFooter__text">Copyright by Coders Lab</p>
            <div className='PageFooter__author'>
                Created by
                <a className='PageFooter__author-github' href='https://github.com/mlisek96' target='_blank'>
                    <IconBrandGithub size='16' className='PageFooter__author-github__icon'/>
                    {''} mlisek96
                </a>
            </div>
        </footer>
    )
}