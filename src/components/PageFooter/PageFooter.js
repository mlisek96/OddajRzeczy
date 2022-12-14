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
                <a className='PageFooter__github' href='https://github.com/mlisek96' target='_blank'>
                    {/*<IconBrandGithub size='16' className='PageFooter__github__icon'/>*/}
                    {''} mlisek96
                </a>
            </div>
            <div className="PageFooter__feedback">
                If you spot any bug or have feedback, please open an isssue on
                <a className='PageFooter__github' href='https://github.com/mlisek96/oddaj-rzeczy' target='_blank'>
                    {''} GitHub
                </a>
            </div>
            <p className="PageFooter__text">Copyright by Coders Lab</p>
        </footer>
    )
}