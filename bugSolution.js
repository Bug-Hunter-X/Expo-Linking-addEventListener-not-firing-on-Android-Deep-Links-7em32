/* bug.js */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (event) => {
      setUrl(event.url);
      console.log('Deep link opened:', event.url);
    };

    Linking.addEventListener('url', handleUrl);

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        setUrl(url);
        console.log('Initial URL:', url);
      }
    });
  }, []);

  return (
    <View>
      {url ? <Text>Deep link URL: {url}</Text> : <Text>Waiting for deep link...</Text>}
    </View>
  );
}

/* bugSolution.js */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //No changes to event listener
    const handleUrl = (event) => {
      setUrl(event.url);
      console.log('Deep link opened:', event.url);
    };
    Linking.addEventListener('url', handleUrl);
    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  useEffect(() => {
    //Add handling for initial URL
    Linking.getInitialURL().then(url => {
      if (url) {
        setUrl(url);
        console.log('Initial URL:', url);
      }
    });
  }, []);

  return (
    <View>
      {url ? <Text>Deep link URL: {url}</Text> : <Text>Waiting for deep link...</Text>}
    </View>
  );
}
