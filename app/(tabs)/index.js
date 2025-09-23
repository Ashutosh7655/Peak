
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WorkoutLog() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.name}>Madison</Text>
            <View style={styles.row}>
              <Text style={styles.age}>Age: 28</Text>
              <Ionicons name="female" size={16} color="#caff3d" style={{ marginLeft: 5 }} />
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>75 Kg</Text>
                <Text style={styles.statLabel}>Weight</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>1.65 CM</Text>
                <Text style={styles.statLabel}>Height</Text>
              </View>
            </View>
          </View>

          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.profileImage}
          />
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarSection}>
          <View style={styles.weekRow}>
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, i) => (
              <Text key={i} style={styles.weekDay}>
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.calendarBox}>
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const isToday = day === 9; // highlight day 9
              return (
                <TouchableOpacity
                  key={day}
                  style={[styles.dayCircle, isToday && styles.todayCircle]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isToday && { color: "#000", fontWeight: "bold" },
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Activities */}
        <Text style={styles.activityTitle}>Activities</Text>

        <View style={styles.activityCard}>
          <MaterialCommunityIcons
            name="run"
            size={28}
            color="#8a2be2"
            style={styles.activityIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.kcal}>🔥 120 Kcal</Text>
            <Text style={styles.activityName}>Upper Body Workout</Text>
            <Text style={styles.activityDate}>June 09</Text>
          </View>
          <Text style={styles.duration}>Duration{"\n"}25 Mins</Text>
        </View>

        <View style={styles.activityCard}>
          <MaterialCommunityIcons
            name="arm-flex"
            size={28}
            color="#8a2be2"
            style={styles.activityIcon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.kcal}>🔥 130 Kcal</Text>
            <Text style={styles.activityName}>Pull Out</Text>
            <Text style={styles.activityDate}>April 15 – 4:00 PM</Text>
          </View>
          <Text style={styles.duration}>Duration{"\n"}30 Mins</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="document-text" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="star" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="headset" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    backgroundColor: "#a78bfa",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  age: {
    fontSize: 14,
    color: "#ddd",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  statBox: {
    marginRight: 20,
  },
  statValue: {
    color: "#caff3d",
    fontSize: 16,
    fontWeight: "600",
  },
  statLabel: {
    fontSize: 12,
    color: "#fff",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#fff",
  },
  calendarSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  weekDay: {
    color: "#a78bfa",
    fontSize: 14,
    fontWeight: "600",
  },
  calendarBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
  },
  dayCircle: {
    width: 32,
    height: 32,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  todayCircle: {
    backgroundColor: "#caff3d",
  },
  dayText: {
    color: "#555",
    fontSize: 14,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#caff3d",
    marginVertical: 15,
    marginLeft: 15,
  },
  activityCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 15,
    elevation: 3,
  },
  activityIcon: {
    marginRight: 15,
  },
  kcal: {
    fontSize: 12,
    color: "#777",
  },
  activityName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  activityDate: {
    fontSize: 12,
    color: "#a78bfa",
  },
  duration: {
    fontSize: 13,
    color: "#5a5a5a",
    fontWeight: "600",
    textAlign: "right",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#a78bfa",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
