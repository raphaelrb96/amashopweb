import React, { memo } from "react";

import VideoPlayer from '../../../components/VideoPlayer';
import { Container, Grid } from '@mui/material';
import Buttons from '../../../components/Button/Buttons';

const HeroVideoUm = (props) => {

    return (
        <section>
            <VideoPlayer
                className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"
                src="https://www.youtube.com/embed/sU3FkzUKHXU?rel=0&amp;showinfo=0&amp;background=1&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=sU3FkzUKHXU"
                loop={true}
                poster="https://via.placeholder.com/1920x1080"
                overlay={["#524256", "#53406d", "#6b6097", "#2d506c", "#0e3f6d"]}
                opacity="0.9"
                >
                <Container>
                    <Grid container className="justify-center">
                        <Grid item lg={8} xl={7} md={10} xs={12} className="text-center z-[1] relative pt-[5%] pb-[5%]">
                            <h3 className="mb-[35px] font-semibold font-serif text-white">Monetize seu tempo online: Ganhe dinheiro com suas redes sociais</h3>
                            <p className="w-[80%] mb-[45px] opacity-70 leading-[32px] text-lg font-serif text-white mx-auto lg:mt-0 lg:mx-[75px] lg:mb-[45px] md:text-xmd md:leading-[22px] xs:leading-[22px] sm:w-full">Aprenda a monetizar suas redes sociais e dê o primeiro passo rumo a uma vida de sucesso, e alcance a abundancia financeira que você sempre sonhou.</p>
                            <Buttons href="#" className="btn-fill mx-3 bg-[#ab3d95] hover:bg-[#f50dc6] drop-shadow-md	font-medium font-serif uppercase rounded-[50px] text-[15px] md:mb-[15px] xs:mb-0" size="lg" themeColor="#a0a" color="#a0a" title="Get Started Now" />
                        </Grid>
                    </Grid>
                </Container>
            </VideoPlayer>
        </section>
    );
};


export default memo(HeroVideoUm);