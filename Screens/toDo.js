import { View,Text,TouchableOpacity, Image, ScrollView, Modal, TouchableWithoutFeedback, TextInput, Switch, DrawerSlideEvent,} from "react-native";
import styles from "../Styling/styles";
import Updates from "../Updates/updates";
import Task from '../Components/todo';
import React, { useState } from "react";
import RemindToggle from '../Components/iconTogglers';
import { LinearGradient } from "react-native-svg";

//import { text } from "@fortawesome/fontawesome-svg-core";
//import {DateTimePicker} from "@react-native-community/datetimepicker"
//import { TextInput } from "react-native-gesture-handler";
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";




export default function TODO({navigation}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [shaw, setShaw] = useState(false);
    const [dateText, setDateText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = Date(currentDate);
        let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + '|Minutes: ' + tempDate.getMinutes();
        setDateText(fDate + '\n' + fTime + '\n')
    }

    const showMode = (currentMode) =>{
        setShaw(true);
        setMode(currentMode);
    }
    const [isLocationModal, setIsLocationModal] = useState(false);
    const hideLocaModal = () => setIsLocationModal(false);
    const showLocaModal = () => setIsLocationModal(true);
    const [isOpen, setIsOpen] = useState(false);
    const show = () => setIsOpen(true);
    const hide = () => setIsOpen(false);
    const [Location, setLocation] = useState('Add Location');
    const [source, setSource] = useState('remind me');

    const notRemindMe = {uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPklEQVR4nO2Z/2tOURzHXxgPZdMw5ltYmNLyZT/JlxRTK7GZX+ZL/gAbKfmSn6aYEvnBD8hPUloxo1jx62at1OTLJF9+oMmYFc+MYR4d3lenNQ/Ps3vufW551amn27nv9+fce55zPvdz4D9/ZTFwA4gDH4DrwCIixnzgI5AY0My1QiJEvQKvAyar1enaZSLEGwWdb12bomudRIhOBW2CHziQ10SAEcBa4KU1tfLVvKn1AlijvhnHKGCXnnbiH5vpuxuIkSEsAB5ZAbYBNcBG4ArQBbzV703AIfXx+j8GisIexGrtEyagO8CqFO5dCbTq3h6ghJAwm9t7BXIMGJmGRhZQKw2zaS4hhP9EuwI46oPeYWm1SzswDsi4GRjug57RaJLmPgLCTKFXMjX5lF+YaWU0OzTlnLNBhuYJ+k2ztNcTACdltseB9l5pnyAAvCVzmQPt5dJuIQA6Bsmj/GK6tE2K45xPMhvtQHuMtHtxTExGXx169MnD6X4y0UopXNEljwkOPZgtk3cOPZ7LY5ZDDxbK5IlDj3vycJoRr5DJbYceTQ6X999sl8lFhx6X5LHNocfPHdd1YldrfRo445ZMSh16bJbHTVcGWdbSONWVCb9Wq4S8nGTBpTJ4iHvuy8tUZHznQoAfPvvldd5v4XlKHb4BM3DPTHl9Bub6JToMaNQTOk1wnJFno2IYMkestMTkWkGRJ8+EihNDokZCX0KqO5XIO6FY0mKHlbKbtT0stiiGhGJKGa+OW0n4VCoWU71JGW/zK8yQE7CEasgpc86q/oVZZC6yqppn0xEYr13cCHwHrgJbtZq4Jk/Z7zV5mxgeALnpCo4DjuvT1jsG6AeeAg3KVKuAMmApUAzMAQr0IGzjXF0rUJ9i3VMuDaPVIO1+y69HMeT48YQmAdXanHpTOMxJt/XKq9rlDMjSn68COAic0iluk1UBMccN3dYe4O1F3dZRRJ/uqZeG0aqQdiC132R4QSbLAPKs85CMJa4gxybpkxOFgbQqyHVJ+pQHWd9Nl50K0pR0sv/wNry6lVmpMpYYcFeBPtNZSrZamTWItqCP2NKtqHuDGayZQUwjIsS0B7RoAYirqFcVhTdBmPwA24ggfxlw/doAAAAASUVORK5CYII='}
    const RemindMe = {uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5ElEQVR4nNWaX2iXVRjHP21NY+RKEUdTU7vIXFiItyZ5MWRU6sh1UWhC3hguBbv4DRz4b3UhRkh65YUKhemKnDlBoougEZRK6sQMKSyM6dTaJJyok0e+Lxxet/3e9/ee8+7nFw78fuc953nO9/ec53mf85wfhMN0oAPoV/samM0jhunANWAo1qxvWh4LqAWaPMjp0MKPauHWutR3kMCoBnqAO8CKjLL6tehpMStZ33/kgIKUZSVzeRQi9oxyJ1MBvAr8IRldImDtmPrsWQNQSRmSqQQ+AP4cxsFHav9ozrhyIfMi8LOzwDPARuA14AvgKnAF+Bx4HdgqX4zGnwPmjDWZ+U6YPQ80JpT7GLAEuKi5/dqSY0KmHrihZwcU9dJiAnBIMv4F5pIzGfOJn9T3pZy8VDwOfOVsyypyJHNYny+UaIk4nnQi3QZyQEQmam94lG0+YzIv5RWa2xwiKz3Kte15QXIt4uWCjzxlAHFsldwd5Ii2AGQaJLObHPCJIo3hQym+C7zrQfazkvcXOeB/YL/zvdWjZaoly3QExTgpGoz1+7TMbckK+j6ZJCV9wzzzRea65DxNQER72LJcApG5JBlTCYh6KTk7ypisPtOj+S8QEI1S8l2RcVnIfK+5iwmI9VKyM8HYUrfZLs1rISB2S8n7CceXYpm1mvMZAXFGShakmJOWzEKN/5VAsIrIPR2A0sb4NNusSgc201VHAKxzToOlII1lDmqsbTOvsBT7dwlfmkFOUjJNzsEty+nzIaxyCgxZBSchUwH8pnE+ktEHqHMqJW97kpmEzDtOOvRMVoU1wEkJ7MQvkpD5VmN+UcWlJDznhFvzjyn4R7FoNlnb2cac1ppSYZFMGuVVMwiHYpaZ6eRffVpbIrzlnAk6s5jUI5karWVIa2tOIvRvTdjsO/RlJFMBbElzFO7V4OfJH61FyMxxKvlFsddxrpcoHzLzHF/Zk/QesccR1qWIMouxIfMxcFyRLUomLZolgjnXp6pmuCXSXh2q9ugOZIXKpq+okm5H4YlOi8pGhiec/lqF0nrNXQa8B6xxyqXbYrrt6mF7qbVmY74a+EaXNUM5tP0OmXan3263vKbyjfrl2qXUrqB/1HaMbnNvqRpyL7bIQT2LfmHzwx+AI8A+WWFNrPDg64I2FbqldHmR99SQyCdFIW8yN6XQ/KBYbWygxHTmjudbgGExIGWjZQNPOVsrLQp5WSa6jhvtbyBvZqy4FxwyLxMILc4BzLZQHJOcy5yklZiRyGwiIMYDp5x8qFnvpBpZIiJxIo8/CmTFVIfMcO1EqOoIAWC/tlVAzA8sAFizz7adgljiPr8Fm5Bx4YVdAAAAAElFTkSuQmCC'}

    



    return (  
            <View style = {styles.todoItemsContainer}>
                <Text style = {styles.today}>Today</Text>
                <TouchableOpacity style = {styles.adddTask} onPress={show}> 
                    <View >
                            <Text style = {styles.addtxt}>Add Task</Text>
                    </View>    
                </TouchableOpacity>
                <View style = {styles.taskContainer}>
                <ScrollView>
                    <Task text = {'shut the fuck up kev'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'shut the fuck up kev'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'shut the fuck up kev'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'shut the fuck up kev'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                    <Task text = {'witchoo dumb ass!'}/>
                </ScrollView>      

                </View>    
                
                <Modal 
                    visible={isOpen}
                    animationType="slide"
                    onRequestClose={() => {setIsOpen(false)}}
                    transparent={true}>
                    
                    <View style = {styles.modalView}>
                    
                        
                    
                        <View style = {styles.modalSectionOne}>
                            <View style = {styles.modalSectionOneBtns}>
                                <TouchableWithoutFeedback onPress={hide}><Image style = {styles.closeModal} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nO3ZsUoDQRDG8X9pp6WPYWO7hRffILCNz+BbGLC0sRatBGtB7H0iSZOgQdhACHtncrM7swfzwbWz+ZG73HwEPB6Px9NgToAF8ApcGZx/mc5+AM4kg+6A33StgIheOmC5c/6TZNjbziBNTLeH+Lu+JAOv04fXxHQZxA9wIx08z2DWJQZnEoDvDOK21AEamOoIDYwaoiZGHVEDY4YoiTFHlMA0g5BgmkOMwTSLOAbTPOIQzGQQ28Se3Ww5JcTQNzM5xH+YSSH6VvHtM6NZzkTJPdgaFUClFK2NmuaoDP3EapYzUQ55TzSPCUe87JrFhBFv7OYwQbB2NIMJBXYnc0wouACaYUKFLVYdEyqu4mqYoNAnqmM0S9G8FubCoBTFnnI2kwx9NuoTMYP5lAy8NyxFcQ/zIhl2CjwCH+n+1c4MeE//Vp0bnO/xeDweBrMBDBFrUA6G6AoAAAAASUVORK5CYII='}}/></TouchableWithoutFeedback>
                                <TouchableOpacity  style={styles.saveTask}>
                                        <View>
                                            <Text style = {styles.saveTaskText}>save</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <TextInput 
                                style = {styles.taskTitleinModal}
                                placeholder="Task title"
                            />
                        </View>
                        
                        <View style = {styles.addLocation}>
                            <Text>Date: </Text>
                            
                        </View>
                        <RemindToggle/>
                        <TouchableWithoutFeedback style = {styles.addLocation} onPress={showLocaModal}>
                            <View style = {styles.addLocation}>
                                <Text>{Location}</Text>
                                
                                <Image style = {styles.locationImage} source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVR4nO2ZS2sUQRCAP19EySoiEZUEAkFBiOCe4uYHeBO9RXPKWfAUBQ8eJCEs3kQ95PULPMSDt+BF8R1EL4K5JkhQE8FgFNfXSEMFliUmXdnqnh7xg4JlZqiaj+6p2emG/6zJbqAfmABmgA/Adwn3+7mcOyfXJschYBT4AmSe4a6dBA6TAC3AMLCiEGgMN1rXJFcutAEPmhBojCfAwdgSx4B5Q4nVmJPcUTgQSKJextUIyk6ZAlngeBz6mRmOIJFJVEO22Ga6kzZqQFcIkdGIEpnEuLVECficg8iK1DajX3kD34AbwAmgVcL9vinnNLn6LEUmFIXfAsfXyVWWa3zzjVmKzChGYj2JehnfkXlmKbLoWdRNJ19ueeZ8bylS8yzao8hZUYyyGb7TQNNhSp45v9ppwLsAIns8cy5YirzJcWq9thS561nUvSesH/YpS5Gq4sF0rXUjyooGMmQp0udZNJOXXdnwhXjaUmQ/8EtRvCZTpyINwEWvHPMdiQz4IU3BlFeKG7CKhxT8oyqTuBRC5Ghkid9AJ4F4GVHkPgE5H1HkbEgR130+RZBYAHYQmOsRRK4QgY5NfK5qYhnYSyTGAoqMEJH2QGtcH4F9RGYogMgFcmCX8WL2bIxO9TcGDEVOkSNbgRcGEvdIgLJsn21Wwu0lHiERqk2IDJIQLbJIoJVw29XbSIwK8FMh4f4ddJMoIwqRiyTMduCRh8S0dLyk6QCWNliUdtt4heCMfKo2Srhn6CQF4+oaIpcpIFuA23USd+RYISnJjtNT601N/lX+AJW6sAqkjpn4AAAAAElFTkSuQmCC"}}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                     
                </Modal>
                <Modal
                    visible={isLocationModal}
                    animationType="slide"
                    onRequestClose={() => {setIsLocationModal(false)}}
                    transparent={true}>

                    <View style = {styles.addLocationModal}>
                        <View style = {styles.addTaskLocationSearchBtn}>
                            <TextInput style = {styles.addTaskLocationInput}/>
                                <TouchableOpacity style = {styles.addTaskLocationSearchBtn}><Image source={{uri: 'https://'}} style = {styles.addTaskLocationSearchIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>
        </View>
            
    );
}
