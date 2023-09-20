import React, { useState } from "react";
import { View, Image ,Switch } from "react-native";
import styles from "../Styling/styles";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const RemindToggle = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () =>{
        
        setIsEnabled(previousState => !previousState);
    };

    return (
        <View style = {styles.taskReminderinModal}>
            <Image
                style={styles.ringerIndicatorImage}
                source={{
                    uri: !isEnabled
                        ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5ElEQVR4nNWaX2iXVRjHP21NY+RKEUdTU7vIXFiItyZ5MWRU6sh1UWhC3hguBbv4DRz4b3UhRkh65YUKhemKnDlBoougEZRK6sQMKSyM6dTaJJyok0e+Lxxet/3e9/ee8+7nFw78fuc953nO9/ec53mf85wfhMN0oAPoV/samM0jhunANWAo1qxvWh4LqAWaPMjp0MKPauHWutR3kMCoBnqAO8CKjLL6tehpMStZ33/kgIKUZSVzeRQi9oxyJ1MBvAr8IRldImDtmPrsWQNQSRmSqQQ+AP4cxsFHav9ozrhyIfMi8LOzwDPARuA14AvgKnAF+Bx4HdgqX4zGnwPmjDWZ+U6YPQ80JpT7GLAEuKi5/dqSY0KmHrihZwcU9dJiAnBIMv4F5pIzGfOJn9T3pZy8VDwOfOVsyypyJHNYny+UaIk4nnQi3QZyQEQmam94lG0+YzIv5RWa2xwiKz3Kte15QXIt4uWCjzxlAHFsldwd5Ii2AGQaJLObHPCJIo3hQym+C7zrQfazkvcXOeB/YL/zvdWjZaoly3QExTgpGoz1+7TMbckK+j6ZJCV9wzzzRea65DxNQER72LJcApG5JBlTCYh6KTk7ypisPtOj+S8QEI1S8l2RcVnIfK+5iwmI9VKyM8HYUrfZLs1rISB2S8n7CceXYpm1mvMZAXFGShakmJOWzEKN/5VAsIrIPR2A0sb4NNusSgc201VHAKxzToOlII1lDmqsbTOvsBT7dwlfmkFOUjJNzsEty+nzIaxyCgxZBSchUwH8pnE+ktEHqHMqJW97kpmEzDtOOvRMVoU1wEkJ7MQvkpD5VmN+UcWlJDznhFvzjyn4R7FoNlnb2cac1ppSYZFMGuVVMwiHYpaZ6eRffVpbIrzlnAk6s5jUI5karWVIa2tOIvRvTdjsO/RlJFMBbElzFO7V4OfJH61FyMxxKvlFsddxrpcoHzLzHF/Zk/QesccR1qWIMouxIfMxcFyRLUomLZolgjnXp6pmuCXSXh2q9ugOZIXKpq+okm5H4YlOi8pGhiec/lqF0nrNXQa8B6xxyqXbYrrt6mF7qbVmY74a+EaXNUM5tP0OmXan3263vKbyjfrl2qXUrqB/1HaMbnNvqRpyL7bIQT2LfmHzwx+AI8A+WWFNrPDg64I2FbqldHmR99SQyCdFIW8yN6XQ/KBYbWygxHTmjudbgGExIGWjZQNPOVsrLQp5WSa6jhvtbyBvZqy4FxwyLxMILc4BzLZQHJOcy5yklZiRyGwiIMYDp5x8qFnvpBpZIiJxIo8/CmTFVIfMcO1EqOoIAWC/tlVAzA8sAFizz7adgljiPr8Fm5Bx4YVdAAAAAElFTkSuQmCC'
                        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNElEQVR4nO2Zy0tVQRzHP5V1XaRhZWQPKukFIRWuKqNFGAiRiit70B+QFkFYQYuKUigqghYVraIHpJS1EWrZJZMWRg8jerjoQfSQUrOy7MbQ98AQWt7jmXPOhb4wi3vunO/nN+eemfnd38B//VMzgSagW+0KsIAMHMQHIPVH69J3GaMmBX4JmKrWaF3LGHUraDMATwW69okM0uu/DMR8F3uNAUqBTgXdqAEUWK9bp/pkEUONA7YBbwaZ4EM103c7kCAmWgQ8sgJsB/YCa4ELwDvgLXAeKAf2q4/X/zFQFPUgVgM9CugOsCqNe0uA27q3V69bJFpqrU6HfL7zZk7Vy8N4Gc/Q50SHAmgIwO+AvDrkHZp2C5wERgfgZzxuyrOOkDQWeCXokgB9zWtlPF+GtTSXC2ieYNBKynsdIei4YDsceNfJ+xghqE2w5Q68S+TdSgjy5odJO4LWdHm/IAR9ESzbgXe2vPtwrIRA3x0yvonhdD+ZbKUUrvRejEkOGcwRxPyNdaXnYsx2yGCxIE8cMu6J4TQjXinILYeMpBgrHDLYLMhFh4wmMTY5ZHBUkJ0OGQ1iHHbI4IYgZQ4Z68W47gqQZS2N01xB+L1apcRykgWXCfAQ97ov1hoX5udCmB+edol1loA1X6nDj5Bqt7PE+grMC8p0FNCiJ3SS8HRKzBbFMGLVW2mJybXCUr5V0T84UrN9MuqPqO5UKnZKsfjSFitlN2t7VNqgGFKKKW15ddxqolf1SCr53uYXh+OyhYrF1JHT1hmr+hdlkbnIqmqe9mMwUbu4MfgJXAU2ajVxrXxlv9fENjE8APL8Gk4AjuivrXcMMAA8BZqVqdYAFcAyoBiYCxTqQdjgPF0rVJ9i3VMpD+PVLO8Bi9erGHKDeEJTgFptTn1pHOb4bX1i1bp8A7I0+aqAPcAJ4LL+2fVbB55d1ueUUhxz7aO1NyV17wl5Vck78mO53mFUQHLV5zMxVo+CHD+MgZiDndiqTUGa88OhVBlmfdevtipIU9LJGeLX8OpWZqWKrRLAXQX6TGcpOWoV1iDawz5i86MZ1mAGa+2qumeEEtoDWrUA9KioV5MJvwRR6hfODyAD4VH9YgAAAABJRU5ErkJggg=='
                }}
            />
            <Switch
                onValueChange={toggleSwitch} 
                value = {isEnabled}
            />
        </View>
    );
};

export default RemindToggle;

