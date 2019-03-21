import paho.mqtt.client as mqtt
import ssl
import serial
import json
import time

rootca=r'D:\ClearSky project\cs_python\AmazonRootCA1.pem.txt'
cert=r'D:\ClearSky project\cs_python\ec98c8d4ab-certificate.pem.crt'
keyf=r'D:\ClearSky project\cs_python\ec98c8d4ab-private.pem.key'

host1='a2vyiluu6d4991-ats.iot.us-east-2.amazonaws.com'

client = mqtt.Client()
client.tls_set(rootca, cert, keyf, cert_reqs=ssl.CERT_REQUIRED,tls_version=ssl.PROTOCOL_TLS,ciphers=None)
client.connect(host1,8883)
client.loop_start()

def on_connect(client,userdata,flasgs,rc):
    print ("connected with code :" +str(rc))
    client.subscribe("ClearSky/iot")

def on_message(client,userdata,msg):
    # print(msg.payload.decode())
    pass

client.on_connect = on_connect
client.on_message = on_message

iot = serial.Serial('COM6')

while iot.is_open:
    data = iot.readline().decode()
    data = data.split(':')
    analog = data[0]
    digital = data[1]

    gases_lvl = analog.split(',')
    co = int(gases_lvl[0])
    ch4 = int(gases_lvl[1])
    co2 = int(gases_lvl[2])

    alert = digital.split(',')
    co_alrt = int(alert[0])
    ch4_alrt = int(alert[1])
    co2_alrt = int(alert[2])

    payload = {
        'deviceID': 'iot_1',
        'timestamp': time.time(),
        'CO': co,
        'CH4': ch4,
        'CO2': co2,
        'CO_is_danger':co_alrt,
        'CH4_is_danger':ch4_alrt,
        'CO2_is_danger': co2_alrt
    }

    # print(payload['CO'])
    client.publish('ClearSky/iot',json.dumps(payload))
    time.sleep(60);
    # client.publish('ClearSky/CO',co)
    # client.publish('ClearSky/CH4',ch4)
    # client.publish('ClearSky/CO2',co2)
    # client.publish('ClearSky/CO_Alert',co_alrt)
    # client.publish('ClearSky/CH4_Alert',ch4_alrt)
    # client.publish('ClearSky/CO2_Alert',co2_alrt)

    # print('co',co)
    # print('co danger?',co_alrt)
    # print('ch4',ch4)
    # print('ch4 danger?',ch4_alrt)
    # print('co2',co2)
    # print('co2 danger?',co2_alrt)
