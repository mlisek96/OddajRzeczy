import React from "react";
import { IconBrandGithub } from '@tabler/icons';
import Heart from '../../assets/heart.svg'
import './PageFooter.scss'

export function PageFooter({style}) {
    return (
        <footer className='PageFooter' style={style}>
            <div className='PageFooter__author'>
                Created with
                <img src={Heart} className="PageFooter__author-heart"/>
                by
                <a className='PageFooter__author-github' href='https://github.com/mlisek96' target='_blank'>
                    <IconBrandGithub size='16' className='PageFooter__author-github__icon'/>
                    {''} mlisek96
                </a>
            </div>
            <p className="PageFooter__text">Copyright by Coders Lab</p>
        </footer>
    )
}