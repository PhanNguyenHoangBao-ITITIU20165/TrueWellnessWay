import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Flex, Row, Col, Typography, theme } from 'antd';
import { assets } from '../../assets';
import { customColors, navBarHeight } from '../../theme';
import { Products } from '../../components/userComponents/products';
import Marquee from 'react-fast-marquee';
import { useDispatch, useSelector } from 'react-redux';
import { IAppDispatch, IRootState } from 'src/redux/store';

const { Text } = Typography;

export const HomePage = () => {
    const { token } = theme.useToken();
    const productsInStock = useSelector((state: IRootState) => state.products.items);

    const images = [
        assets.image1,
        assets.image2,
        assets.image3,
        assets.image4,
        assets.image5,
        assets.image6,
        assets.image7,
        assets.image8,
        assets.image9,
        assets.image10,
        assets.image11,
        assets.image12,
        assets.image13,
        assets.image14,
        assets.image15,
        assets.image16,
    ];

    const [hoveredImages, setHoveredImages] = useState<boolean[]>(Array(images.length).fill(false));

    const setHoveredImage = (index: number, isHovered: boolean) => {
        setHoveredImages((prev) => prev.map((hovered, i) => (i === index ? isHovered : hovered)));
    };

    //temp data
    const highlightProducts = productsInStock.slice(0, 8);

    return (
        <Flex style={{ flexDirection: 'column', width: '100%', alignItems: 'center', paddingTop: `${navBarHeight}`, backgroundColor: 'black' }}>
            <Flex style={{ position: 'relative' }}>
                <div style={{ width: '100%' }}>
                    <Image style={{ width: '100%' }} preview={{ mask: null }} src={assets.banner} alt="Banner" />
                </div>
                <Flex
                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        backgroundColor: '#FFFAA0',
                        width: '500px',
                        left: '90%',
                        top: '5%',
                        borderRadius: '10px',
                        padding: '30px 50px',
                        border: '5px solid #ffbf00',
                    }}
                >
                    <Text style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '3px' }}>New Arrival</Text>
                    <Text
                        style={{
                            fontSize: '52px',
                            fontWeight: '700',
                            lineHeight: '65px',
                            color: token.colorPrimary,
                            marginTop: '10px',
                        }}
                    >
                        Discover Our New Collection
                    </Text>
                    <Text style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', marginTop: '10px' }}>
                        "Find Your Strength, Live Your Best Life – Wellness in Every Way, Every Day!"
                    </Text>
                    <Link to="/shop">
                        <Button
                            block
                            style={{
                                backgroundColor: token.colorPrimary,
                                color: '#FFF',
                                fontWeight: '700',
                                fontSize: '16px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '25px 72px',
                                marginTop: '40px',
                                width: '50%',
                            }}
                        >
                            BUY NOW
                        </Button>
                    </Link>
                </Flex>
            </Flex>
            <Flex
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '50px',
                    width: '80%',
                }}
            >
                <Text
                    style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: 'white',
                        margin: '0',
                    }}
                >
                    Browse The Range
                </Text>
                <Text
                    style={{
                        fontSize: '20px',
                        fontWeight: '400',
                        color: 'white',
                        margin: '0',
                    }}
                >
                    Fuel Your Fitness, Embrace Your Wellness
                </Text>
                <Row style={{ justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px', width: '200px', height: '200px', objectFit: 'cover' }}
                            src={assets.treadmills}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600', color: 'white' }}>Treadmills</p>
                    </Col>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px', width: '200px', height: '200px', objectFit: 'cover' }}
                            src={assets.weight}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600', color: 'white' }}>Weight</p>
                    </Col>
                    <Col
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Image
                            style={{ borderRadius: '10px', width: '200px', height: '200px', objectFit: 'cover' }}
                            src={assets.accessories}
                            alt="Banner"
                            preview={{
                                mask: null,
                            }}
                        />
                        <p style={{ fontSize: '24px', fontWeight: '600', color: 'white' }}>Accessories</p>
                    </Col>
                </Row>


                <Text
                    style={{
                        fontSize: '40px',
                        fontWeight: '700',
                        color: 'white',
                        marginTop: '20px',
                    }}
                >
                    Our Products
                </Text>
                <Products productsDetailList={highlightProducts} />
                <Link to="/shop">
                    <Button
                        style={{
                            color: 'black',
                            backgroundColor: '#fffaa0',
                            fontWeight: '600',
                            fontSize: '16px',
                            textAlign: 'center',
                            width: '250px',
                            height: '50px',
                            marginTop: '50px',
                            border: `5px solid #ffbf00`,
                        }}
                    >
                        Show more
                    </Button>
                </Link>
            </Flex>
            <Flex style={{ flexDirection: 'column', alignItems: 'center', marginTop: '70px' }}>
                <Text style={{ fontSize: '40px', fontWeight: '700', margin: '0px 0 20px 0' }}>
                    #FurniScapeFurniture
                </Text>
                <Marquee>
                    <div
                        style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(8, 2fr)', margin: '20px' }}
                    >
                        {images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                style={{
                                    objectFit: 'contain',
                                    cursor: 'pointer',
                                    transition: 'all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)',
                                    transform: hoveredImages[index] ? 'scale(1.1)' : 'scale(1)',
                                }}
                                preview={{
                                    mask: null,
                                    style: {
                                        objectFit: 'contain',
                                        cursor: 'pointer',
                                        transition: 'all 0.1s cubic-bezier(0.15, 0.83, 0.66, 1)',
                                        transform: hoveredImages[index] ? 'scale(1.1)' : 'scale(1)',
                                    },
                                }}
                                onMouseEnter={() => setHoveredImage(index, true)}
                                onMouseLeave={() => setHoveredImage(index, false)}
                            />
                        ))}
                    </div>
                </Marquee>
            </Flex>
        </Flex>
    );
};