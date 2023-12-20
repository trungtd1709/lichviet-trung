import React from "react";

const LoaderData = ({size = 'small', showLoad = true, fixed = false}) => {
    return (
        <>
            {
                showLoad ?
                    <div className={fixed ? 'fixed-loader' : ''}>
                        <div className={'load ' + size}>
                            <div className={'loader'}>
                                <span style={{'transform': 'rotate(calc(30deg * 1))', '--i': 1}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 2))', '--i': 2}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 3))', '--i': 3}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 4))', '--i': 4}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 5))', '--i': 5}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 6))', '--i': 6}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 7))', '--i': 7}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 8))', '--i': 8}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 9))', '--i': 9}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 10))', '--i': 10}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 11))', '--i': 11}}/>
                                <span style={{'transform': 'rotate(calc(30deg * 12))', '--i': 12}}/>

                            </div>
                        </div>
                    </div> : <></>
            }
        </>
    );

}
export default LoaderData;