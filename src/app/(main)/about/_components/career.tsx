import CustomCard from "@/components/custom-card";
import CustomTimeline from "@/components/custom-timeline";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import myEducation from "@/data/education";
import myExperience from "@/data/experience";
import mySkills from "@/data/skills";


export default function Career() {
  return (
    <Tabs
      id="career"
      defaultValue="experience"
      className="w-[350px] sm:w-[400px] md:w-3/4 h-full m-auto pt-16">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="experience">
          Experience 🚀
        </TabsTrigger>
        <TabsTrigger value="skills">
          Skills 🛠️
        </TabsTrigger>
        <TabsTrigger value="education">
          Education 🎓
        </TabsTrigger>
      </TabsList>

      <TabsContent value="experience">
        <CustomTimeline
          data={myExperience}
          activeItem={-1}
        />
      </TabsContent>

      <TabsContent value="education">
        <CustomTimeline
          data={myEducation}
          activeItem={-1}
        />
      </TabsContent>

      <TabsContent value="skills">
        <CustomCard
          title="Skills"
          description={mySkills}
        />
      </TabsContent>
    </Tabs>
  )
}