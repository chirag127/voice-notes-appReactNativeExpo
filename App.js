import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { Audio } from "expo-av";

export default function App() {
    const [recording, setRecording] = useState(null);
    const [recordings, setRecordings] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Audio.requestPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to access microphone is required!");
            }
        })();
    }, []);

    const startRecording = async () => {
        try {
            setIsRecording(true);
            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
        } catch (error) {
            console.error("Failed to start recording", error);
        }
    };

    const stopRecording = async () => {
        setIsRecording(false);
        if (!recording) return;

        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setRecordings([...recordings, uri]);
        setRecording(null);
    };

    const playSound = async (uri) => {
        const { sound } = await Audio.Sound.createAsync({ uri });
        await sound.playAsync();
    };

    const stopSound = async () => {
        setIsPlaying(false);
        await sound.stopAsync();
    }

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: "center", padding: 40 }}
        >
            <Button
                title={isRecording ? "Stop Recording" : "Start Recording"}
                onPress={isRecording ? stopRecording : startRecording}
            />

            <FlatList
                data={recordings}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text>Recording {index + 1}</Text>
                        {/* <Button title="Play" onPress={() => playSound(item)} /> */}

                        <Button
                            title={isPlaying ? "Stop" : "Play"}
                            onPress={() => {
                                if (isPlaying) {
                                    setIsPlaying(false);
                                    stopSound();
                                } else {
                                    playSound(item);
                                    setIsPlaying(true);
                                }
                            }}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
